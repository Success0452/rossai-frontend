"use client"
import {useRouter} from "next/navigation";

export const DashDesktopItem = (props:any) => {
    const router = useRouter();

    return (
        <>
            <div
                className={"flex flex-col items-start justify-start w-full h-screen overflow-x-hidden"}>

                {props.children}
            </div>
        </>
    )
}
