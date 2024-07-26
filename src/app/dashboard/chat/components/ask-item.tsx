import {useEffect, useState} from "react";
import { Transition } from '@headlessui/react';
import Image from "next/image";

export const AskChatItem = (props:any) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {props.allChat?.text ?
                <div className={"w-full h-full min-h-[70px] rounded-[8px] flex flex-col md:flex-row items-start justify-start md:items-center md:justify-start p-4 md:p-4"}>
                    <audio src={props.allChat?.response} controls ></audio>
                </div> :
                <div
                    className={"bg-[#F6F6F6] w-full h-full min-h-[70px] rounded-[8px] flex flex-col md:flex-row items-start justify-start md:items-center md:justify-start p-4 md:p-4 mt-5"}>
                        <div
                            className={"flex flex-col md:flex-row w-full items-start md:items-center justify-start max-w-full"}>
                            <div className={"flex flex-row items-center justify-center"}>
                                <Image src={'/avatar.jpeg'} width={28} height={28} alt="Avatar" className={"w-[28px] h-[28px] rounded-full"}/>
                            </div>

                            <div className={"flex flex-row items-start justify-start w-full"}>
                                <div
                                    className={"text-[16px] leading-[24px] text-start font-[500] text-[#232323] mt-3 md:mt-0 md:ml-4"}>
                                    {props.chat}
                                </div>
                            </div>
                        </div>
                </div>}</>
    )
}
