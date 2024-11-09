"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";

export default function Item({data}){
    const [open,setOpent] = useState(false);
    return(
        <>
            {
                data.sublist ? (
                    <li className="transition duration-700 py-4 px-1 border-b border-[#252525]">
                        <button className="w-full flex  items-center justify-between item-center">
                            <p>{data.name}</p>

                            <div onClick={()=>setOpent(!open)} className="pr-16">
                                {
                                open ? 
                                <FaWindowMinimize/> :
                                <FaPlus />
                                
                              }
                            </div>
                        </button>
                        <ul className={`w-full p-3  cu-tr ${open ?"min-h-max overflow-visible block":"max-h-[0px] overflow-hidden hidden"} `}>
                            {
                                data.sublist.map((item,index)=>{
                                    return(
                                        <li key={index} className="py-3 px-1  "> 
                                            <Link
                                            href="/"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </li>
                ):(
                    <li className="py-4 px-1 border-b border-[#252525]"> 
                        <Link
                          href="/"
                         >
                            {data.name}
                        </Link>
                    </li>
                )
            }
        </>
    )
}