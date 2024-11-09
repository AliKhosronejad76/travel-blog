"use client";
import { menudata } from "@/data";
import Image from "next/image";
import ListItem from "./ListItem";
import { IoMdSearch } from "react-icons/io";
import Drawer from "../drawer/Drawer";


export default function Header(){
    return(
        <header className="bg-white flex items-center justify-between px-6 py-3 shadow-[0px_0px_8px_8px_rgba(0,0,0,0.020)]">
            <Drawer/>
            <div className="w-[19%] ">
                <Image 
                    src={"./img/logo.svg"}
                    width={400}
                    height={300}
                    className="w-full h-full"
                    alt="logo"
                />
            </div>
            <ul className="w-[68%] flex justify-around text-gray-700 text-sm ">
                {menudata.map(((item , index )=> <ListItem key={index} data={item}/>))}
            </ul>

            <div className="w-[10%]  h-full flex items-center justify-end text-gray-700 ">
                <button className="">
                    <IoMdSearch className="text-2xl"/>
                </button>
            </div>
        </header>
    )
} 