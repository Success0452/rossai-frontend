import Image from "next/image";
import AiTextField from "src/app/dashboard/components/ai-textfield";

export const ChatField = (props:any) => {
    const makeRequest = async () => {
        props.askQuestion();
    };

    const handleSubmit = (evt:any) => {
        if (evt.key === "Enter") {evt.preventDefault();
            if (props.questions !== "") {
                makeRequest();
            }
        }
    };

    return (
        <div className={"flex flex-row items-center justify-center w-full"}>
            <div
                className={
                    "flex flex-row items-center justify-center w-full xl:w-[65%] mb-5 md:mb-1 sm:mt-1"
                }
            >
                <div
                    className={
                        "w-full h-full border-[1px] border-[#DBDADE] rounded-[15px] bg-transparent flex flex-row items-center relative"
                    }
                >
                    <AiTextField questions={props.questions} setQuestions={props.setQuestions} handleSubmit={handleSubmit}/>
                    <Image src={'/send.svg'} alt="send" width={45} height={45} className={"p-2 cursor-pointer absolute right-0"}
                           onClick={() => {
                            if (props.questions !== "") {
                                makeRequest()
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
