
export const LandingCenterItem = (props:any) => {
    return (
        <div className={"flex flex-col items-center justify-center w-full mb-5 mt-10"}>
            <div className={"text-3xl text-white font-[600] text-center z-20 font-serif"}>{`🎨 Bob Ross AI`}</div>
            <div className={"text-[16px] text-white font-[300] text-center mt-6 md:w-[35%] leading-[30px] z-20"}>
                {'Unleash your inner artist with RossAI, where creativity meets technology. Our AI is here to help you bring the beauty of nature to life, just like the legendary Bob Ross. Whether you\'re a seasoned artist or a curious beginner, RossAI will guide you through painting stunning scenes with easy-to-follow, AI-guided instructions.\n'}
            </div>
            <div className={"text-[16px] text-white font-[300] text-center mt-14 md:w-[35%] leading-[30px] z-20"}>
                {'Whether you\'re a seasoned artist or a curious beginner, RossAI will guide you through painting stunning scenes with easy-to-follow, AI-guided instructions.\n'}
            </div>
            <div className={"text-[16px] text-white font-[300] text-center mt-14 md:w-[35%] leading-[30px] z-20"}>
                {'Get ready to embark on a journey of artistic discovery. With RossAI, every brushstroke is a step towards creating your masterpiece. Let\'s paint some happy little trees and majestic landscapes together!\n' +
                    '\n' +
                    'Start your artistic adventure now!'}
            </div>
        </div>
    )
}
