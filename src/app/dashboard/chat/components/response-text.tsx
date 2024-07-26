import Markdown from "react-markdown";


export const ResponseText = (props:any) => {
    return (
        <div className="overflow-y-auto max-h-max hide-scrollbar">
            <div
                className="text-[16px] leading-[24px] text-black text-justify w-full h-full"
                style={{ whiteSpace: 'wrap' }}
            >
                <Markdown>
                    {props.chat}
                </Markdown>
            </div>
        </div>
    );
};
