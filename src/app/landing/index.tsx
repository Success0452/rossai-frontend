"use client"
import Image from "next/image";
import {useRouter} from "next/navigation";
import {LandingCenterItem} from "src/app/landing/components/landing-center-item";
import {useEffect, useState} from "react";
import {FloatingIcons} from "src/app/landing/components/floating";

const icons = ['art1', 'art2', 'art3', 'art4', 'art5', 'art6', 'art7', 'art8', 'art9', 'art10', 'art11', 'art12', 'art13', 'art14', 'art15', 'art16', 'art17', 'art18', 'art19', 'art20', "art21"];
export const Landing = () => {
    const router = useRouter();
    const [floatingIcons, setFloatingIcons] = useState<any>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIcon = {
                id: Date.now(),
                icon: icons[Math.floor(Math.random() * icons.length)],
                left: Math.random() * 100,
            };
            setFloatingIcons((prevIcons:any) => [...prevIcons, newIcon]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFloatingIcons((prevIcons:any) => prevIcons.slice(1));
        }, 5000);

        return () => clearTimeout(timeout);
    }, [floatingIcons]);

    return (
        <div className={"flex flex-col items-center justify-between w-full h-screen"}>
            <FloatingIcons floatingIcons={floatingIcons}/>
            <div className={'flex flex-row items-start justify-between w-full h-full'}>
                <div className={"flex flex-col items-center justify-center z-10"}>
                    <div className={'flex flex-row items-center justify-center w-full md:w-[50%]'}>
                        <Image src={"/BR.png"} width={100} height={100} alt={"logo"} className={"mt-20"}/>
                    </div>

                    <LandingCenterItem/>

                    <div
                        className={"flex flex-col md:flex-col items-center justify-center w-full z-20 mt-10 cursor-pointer"}
                        onClick={() => {
                            router.push('/dashboard')
                        }}>
                        <Image src={"/chat.svg"} width={80} height={80} alt={"logo"} className={"z-0"}
                               color={'#FFFFFF'}/>
                        <div className={"text-2xl text-white font-[600] text-center z-20 mt-2"}>Chat</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
