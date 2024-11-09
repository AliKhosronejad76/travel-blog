import Link from "next/link";

export default function Icon({icon,href,bgColor}){
    return(
        <div 
         className={`flex items-center justify-center text-white rounded-full w-12 h-12 bg-${bgColor} `}
         style={{
            backgroundColor:bgColor,
         }}
        >
            <Link
             href={href}
             className="text-2xl"
            >
                {icon}
            </Link>
        </div>
    );
}