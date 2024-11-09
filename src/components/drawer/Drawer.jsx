import { LiaTimesSolid } from "react-icons/lia";
import { menudata } from "@/data";
import Item from "./Item";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useDrawer } from "@/app/context/DrawerProvider";



export default function Drawer(){
    const {showDrawer , setShowDrawer} = useDrawer();
    return(
        <div
            className={`${showDrawer ? "translate-x-[0px]":"translate-x-[-1000px]"}  w-full h-full bg-[#191919] fixed top-0 right-0 z-30 text-white transition duration-700`}
        >
            <div className="bg-[#2e2e2e] text-white font-bold text-3xl  px-5 flex items-center justify-end py-3">
                <button onClick={()=> setShowDrawer(false)}>
                    <LiaTimesSolid/>
                </button>
            </div>

            <ul className="px-6 mt-7 yekanbakhMed text-base">
                {menudata.map((item,index)=> <Item data={item} key={index}/>)}
            </ul>
            <SearchBar/>
            <div className="min-w-[70%] max-w-max mx-auto flex flex-wrap items-center justify-center mt-8">
                <Icon href="/" icon={<FaXTwitter/>}/>
                <Icon href="/" icon={<FaTelegramPlane/>}/>
                <Icon href="/" icon={<FaInstagram/>}/>
                <Icon href="/" icon={<FaLinkedinIn/>}/>
               
               

             
               
            </div>
        </div>
    );
}

function SearchBar(){
    return(
        <div
            className="bg-[#444444] mb-5 mt-9 w-[94%] mx-auto rounded-sm"
        >
            <input 
              placeholder="جست و جو کنید"
              type="text"
              className="bg-transparent w-full px-3 py-2.5 text-white outline-none yekanbakhBold"
             />
        </div>
    );
}

function Icon({ href , icon }){
    return(
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white border-4 border-[#444444] text-xl ">
            <Link href={href}>
                {icon}
            </Link>
        </div>
    )
}