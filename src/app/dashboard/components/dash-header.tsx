"use client"
import {useRouter} from "next/navigation";
import {useState} from "react";
import {DashDesktopItem} from "src/app/dashboard/components/dash-desktop";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";

// @ts-ignore
export const DashboardCustomHeader = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-row items-start justify-start w-full min-h-screen">
            {isLoading ? <div className={'w-full min-h-screen flex flex-col items-center justify-center'}><Lottie options={defaultOptions} width={100} height={100} /></div> :
                <>
                {!open && <DashDesktopItem open={open} setOpen={setOpen}
                                           setIsLoading={setIsLoading}>{children}</DashDesktopItem>}
            </>}
        </div>
    )
}
