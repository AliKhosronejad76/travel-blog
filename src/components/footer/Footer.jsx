import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { data1 , data2 } from "@/data";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import List from "./List";
import CopyRight from "./CopyRight";
import BottomMenu from "./BottomMenu";



export default function Footer() {
    return (
        <footer className="bg-transparent pt-10 px-5 ">
            <div className="flex justify-between mb-16">
                <div className="w-[32%]">
                    <List
                        title="جاذبه‌های دیدنی"
                        links={data1}
                    />
                </div>
                <div className="w-[32%]">
                    <List
                        title="لینک های کاربردی"
                        links={data2}
                    />
                </div>
                <div className="w-[32%]">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="w-[90px] text-nowrap text-2xl yekanbakhFat">
                            با ما بمانید
                        </h1>
                        <div
                            className="w-[60%] h-[9px] opacity-30 my-auto"
                            style={{
                                backgroundImage: "url('/img/line.png')"
                            }}
                        >

                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center gap-5 my-8">
                        <Icon 
                        href="/" 
                        icon={<FaXTwitter/>}
                        bgColor={"#000"}
                        />
                        <Icon 
                        href="/" 
                        icon={<FaTelegramPlane/>}
                        bgColor={"#179cde"}
                        />
                        <Icon 
                        href="/" 
                        icon={<FaInstagram/>}
                        bgColor={"#b02aab"}
                        />
                        <Icon 
                        href="/" 
                        icon={<FaLinkedinIn/>}
                        bgColor={"#0266a0"}
                        />
                    </div>
                    <div className="flex justify-center items-center my-10 gap-7">
                        <Image 
                            src="/img/travel-book-logo.png"
                            width={400}
                            height={400}
                            className="w-[90px]"
                        />
                        <Image 
                          src="/img/radiodoredonya-logo.png"
                          width={400}
                          height={400}
                          className="w-[90px]"
                        />
                    </div>
                    <div className=" flex items-center justify-center">
                        <Image 
                            src="/img/logo.svg"
                            width={400}
                            height={600}
                            className="w-[70%]"
                        />
                    </div>
                </div>
            </div>
            <BottomMenu/>
            <CopyRight/>
        </footer>
    );
}

