import Image from "next/image";


export const ResponseActionItem = (props:any) => {
    return (
        <div className="flex flex-row items-center justify-start pt-6 w-full">
            <div
                className="flex flex-row items-center justify-center md:pl-6 pr-6 h-[40px] rounded-[16px] md:bg-[#F8F8F8] cursor-pointer"
                onClick={() => props.copyToClipboard(props.chat)}>
                <Image
                    src={'/copy.svg'}
                    width={20}
                    height={20}
                    className="w-5 h-5 cursor-pointer hidden md:flex"
                    alt={'copy'}
                />
                <Image
                    src={'/copy.svg'}
                    width={20}
                    height={20}
                    className="w-5 h-5 cursor-pointer flex md:hidden"
                    alt={'copy'}
                />
                <div className="text-[12px] text-black ml-2">{props.isCopied ? 'Copied!' : 'Copy'}</div>
            </div>

        </div>
    )
}
