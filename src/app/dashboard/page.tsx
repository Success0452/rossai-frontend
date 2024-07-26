"use client"
import {DashboardCustomHeader} from "src/app/dashboard/components/dash-header";
import {useEffect, useRef, useState} from "react";
import {TopItem} from "src/app/dashboard/components/top-item";
import {defaultOptions} from "src/components/default-option";
import Lottie from "react-lottie";
import {io} from "socket.io-client";
import {EmptyState} from "src/app/dashboard/components/empty-state";
import {ChatItem} from "src/app/dashboard/chat";
import {ChatField} from "src/app/dashboard/components/chat-field";
import Image from "next/image";

export default function DashboardPage() {
    const [chats, setChats] = useState<any[]>([]);
    const listRef = useRef<any>(null);
    const [displayedMessage, setDisplayedMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState("");
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        const newSocket = io(`wss://wffai.onrender.com`, {
            transports: ['websocket'], // Specify transport to websocket only
        });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('WebSocket connected:', newSocket.id);
        });

        newSocket.on('disconnect', () => {
            console.log('WebSocket disconnected');
        });

        return () => {
            newSocket.close();
        };
    }, []);

    const askQuestion = () => {
        console.log(questions);
        console.log(socket);
            setChats((prev) => [...prev, { response: questions, type: "question" }]);
            socket?.emit("data", {
                data: {
                    question: questions,
                    query: chats.length > 2 ? chats[chats.length - 2].response : '',
                    response: chats.length > 2 ? chats[chats.length - 1].response : '',
                },
            });
            setQuestions("");
    };


    useEffect(() => {
        if (!socket) return;

        socket.on("on_chain_stream", (data:any) => {
            console.log("on_chain_stream", data);
            setDisplayedMessage((prevMessage) => prevMessage + data?.kwargs?.content);
        });

        socket.on("on_chain_end", (data:any) => {
            console.log("on_chain_end", data);
            if(data.text){
                setDisplayedMessage("");
                setChats((prev) => [
                    ...prev,
                    { response: data.text, type: "answer" },
                ]);
            }
        });

        return () => {
            socket.off('on_chain_stream');
            socket.off('on_chain_end');

        };
    }, [socket]);

    useEffect(() => {
        scrollToBottom();
    }, [chats, displayedMessage]);

    const scrollToBottom = () => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    };

    return (
        <DashboardCustomHeader>
            {isLoading ?
                <div className={'flex flex-col items-center justify-center w-full h-full'}>
                    <Lottie options={defaultOptions} width={100} height={50}/>
                </div> :
                <div className={'flex flex-col items-center justify-between w-full h-screen overflow-y-scroll md:overflow-y-hidden'}>
                    <div className={'flex flex-row items-start justify-between w-full h-full'}>
                        <div className={'w-full h-full p-6 flex flex-col items-center justify-between'}>
                            <TopItem username={'Ross AI'} />

                            {chats.length === 0 ? <EmptyState /> :
                                <ChatItem
                                    chats={chats}
                                    listRef={listRef}
                                    displayedMessage={displayedMessage}
                                />}

                            <ChatField
                                setIsLoading={setIsLoading}
                                setChats={setChats}
                                setQuestions={setQuestions}
                                questions={questions}
                                askQuestion={askQuestion}
                            />
                        </div>

                        <div className={'flex-row items-center justify-end relative h-[100%] w-[400px] hidden md:flex'}>
                            <Image src={'/bridge.svg'} alt={'bridge'} layout="fill" objectFit="cover" />
                        </div>

                    </div>
               </div>
            }
        </DashboardCustomHeader>
    );
}
