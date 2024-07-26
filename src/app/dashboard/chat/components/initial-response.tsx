import Markdown from "react-markdown";

export const InitialResponse = (props:any) => {
    return (
        <div className={"flex flex-col items-center justify-center w-full bg-white rounded-[10px] p-6 mt-6"}>
            <div className="flex flex-row items-center mt-6 w-full">
                <div
                    className="text-[16px] leading-[24px] white text-justify h-full"
                    style={{whiteSpace: "wrap"}}
                >
                    <Markdown>
                        {props.displayedMessage}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}
