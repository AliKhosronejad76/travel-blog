import Link from "next/link";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaTrainSubway } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";


export default function Services(){
    return(
        <div className="w-full rounded-xl p-7 bg-white my-4">
                 <div className="flex items-center justify-between mb-4">
                    <h1 className="w-[80px] text-nowrap text-xl yekanbakhHeavy">
                        خدمات علی بابا 
                    </h1>
                    <div
                        className="w-[50%] h-[9px] opacity-30 my-auto"
                        style={{
                            backgroundImage: "url('/img/line.png')"
                        }}
                    >

                    </div>
                 </div>

                 <ul className="mt-6 text-gray-700">
                     <ListItem icon={<GiCommercialAirplane/>} href="/" text="بلیز هوابیما" />
                     <ListItem icon={<FaTrainSubway/>} href="/" text="بلیط قطار" />   
                     <ListItem icon={<FaBusAlt/>} href="/" text="بلیط اتوبوس" />   
                     <ListItem icon={<LuHotel/>} href="/" text="رزرو هتل" />   
                     <ListItem icon={<RiHome2Line/>} href="/" text="اجاره ویلا" />   

                 </ul>

        </div>
    );
}

function ListItem({ href , text , icon }){
    return(
        <li className="h-[32px] w-full flex items-center px-2 my-2 transition duration-500 hover:bg-[#fdb713] hover:text-white">
            <Link 
             href={href}
             className="w-full flex items-center "
            >
                <div className="h-full flex items-center">
                    {icon}
                </div>
                <span className="mr-2 text-sm ">
                    {text}
                </span>
            </Link>
        </li>
    );
}