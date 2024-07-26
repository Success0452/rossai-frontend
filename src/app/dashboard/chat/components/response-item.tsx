import React, { useRef } from "react";
import { toast } from "sonner";
import {ResponseText} from "src/app/dashboard/chat/components/response-text";
import {ResponseActionItem} from "src/app/dashboard/chat/components/response-action";
import Image from "next/image";

export const ResponseChatItem = (props:any) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const copyToClipboard = (text:string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
                toast.success("Copied to clipboard");
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };

    return (
        <div className={"flex flex-col items-start justify-start w-full mt-4 bg-white rounded-[10px] p-6"}>
            <div className={"flex flex-row items-center justify-center"}>
                <Image src={'/BR4.jpg'} alt="avatar" width={30} height={30} className={"ml-4 rounded-full"}/>
                <div className={'text-[16px] font-bold ml-3'}>Bob Ross</div>
            </div>

            <div className="h-full flex flex-col mt-6 items-start justify-between">
                <ResponseText chat={props.chat} />
                <ResponseActionItem
                    copyToClipboard={copyToClipboard}
                    isCopied={isCopied}
                    chat={props.chat}
                />
            </div>
        </div>
    );
};
