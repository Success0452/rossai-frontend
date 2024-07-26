import Image from "next/image";

export const FloatingIcons = (props:any) => {
    return (
        <div className="floating-icons-container">
            {props.floatingIcons.map((icon: any, _: number) => (
                <div
                    key={icon.id}
                    className="floating-icon z-40"
                    style={{left: `${icon.left}%`}}
                >
                    <Image src={`/${icon.icon}.svg`} width={40} height={40} alt={"icon"} className={"mt-20 z-40"}/>
                </div>
            ))}
        </div>
    )
}
