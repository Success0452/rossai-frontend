import Markdown from "react-markdown";
import {AskChatItem} from "src/app/dashboard/chat/components/ask-item";
import {ResponseChatItem} from "src/app/dashboard/chat/components/response-item";
import {InitialResponse} from "src/app/dashboard/chat/components/initial-response";

export const ChatItem = (props:any) => {
    return (
        <div
            className={
                "flex flex-col items-start justify-start scrollbar-hide w-full xl:w-[65%] overflow-y-scroll h-full"
            }
            ref={props.listRef}
        >
            {props.chats?.map((chat:any, index:number) => {
                return (
                    <div
                        key={index}
                        className={"flex flex-col items-center justify-center w-full mb-4"}
                    >
                        {chat.type === "question" ? (
                            <AskChatItem chat={chat.response} allChat={chat}/>
                        ) : (
                            <ResponseChatItem
                                chat={chat.response}
                                chatLoading={props.chatLoading}
                                unique={index}
                                activeStatus={chat.status}
                            />
                        )}
                        {index === props.chats?.length - 1 && props.displayedMessage?.length > 0 ? (
                            <InitialResponse displayedMessage={props.displayedMessage} />
                        ) : <div/>}
                    </div>
                )
            })}
        </div>
    );
};
