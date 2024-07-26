import Image from "next/image";

export const TopItem = (props: any) => {
    return (
        <div className={"flex flex-row sm:flex-row items-center justify-center md:justify-end w-full mb-6 mt-4 h-[10px]"}>
            <div className={"flex flex-col md:flex-row items-center justify-center"}>
                <div className={'text-white text-[14px] md:mr-4 hidden md:flex font-bold'}>{props?.username}</div>
                <div
                    className={'w-[40px] h-[40px] cursor-pointer bg-blue-200 rounded-full flex items-center justify-center'}>
                    <Image src={'/user.svg'} width={20} height={20} alt={'user'}/>
                </div>
                <div className={'text-white text-[14px] md:mb-4 flex md:hidden font-bold'}>{props?.username}</div>
            </div>
        </div>
    )
}
