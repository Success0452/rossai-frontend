import Lottie from "react-lottie";
import {emptyDefaultOptions} from "src/components/default-option";

export const EmptyState = (props:any) => {
    return (
        <div
            className={'flex flex-col items-start justify-start w-full bg-[#f9f9f9] rounded-[10px] h-[324px] overflow-y-scroll scrollbar-hide md:w-[60%] p-6'}>
            <div className={'flex flex-row items-center justify-center'}>
                <div className={'w-2 h-2 bg-[#0d1117] rounded-full mr-2'}/>
                <div className={'text-[#0d1117] leading-6 text-[14px] w-full'}>
                    Generate Suggestions: Use our AI to generate painting suggestions
                    based on your chosen theme.
                </div>
            </div>

            <div className={'flex flex-row items-center justify-center mt-8'}>
                <div className={'w-2 h-2 bg-[#0d1117] rounded-full mr-2'}/>
                <div className={'text-[#0d1117] leading-6 text-[14px] w-full'}>
                    The AI provides composition ideas, color schemes, and detailed
                    elements to include in your painting.
                </div>
            </div>

            <div className={'flex flex-row items-center justify-center mt-8'}>
                <div className={'w-2 h-2 bg-[#0d1117] rounded-full mr-2'}/>
                <div className={'text-[#0d1117] leading-6 text-[14px] w-full'}>
                    Customize Suggestions: Adjust the AI suggestions to fit your unique style and vision.
                </div>
            </div>


            <div className={'flex flex-row items-center justify-center mt-8'}>
                <div className={'w-2 h-2 bg-[#0d1117] rounded-full mr-2'}/>
                <div className={'text-[#0d1117] leading-6 text-[14px] w-full'}>
                   You can tweak colors, compositions, and specific elements.
                </div>
            </div>
        </div>
    )
}
