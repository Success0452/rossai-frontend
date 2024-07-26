"use client"
import {StaticCustomButton} from "src/components/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {AuthMobileMenu} from "src/app/components/mobile-menu";
import Image from "next/image";

// @ts-ignore
export const AuthCustomHeader = ({children}) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col items-center justify-start w-full h-screen">
                {children}
        </div>
    )
}
