import Image from "next/image";
import Link from "next/link";
import { GoCommentDiscussion } from "react-icons/go";


export default function BigPostItem(){
    return(
        <div className="w-full">
           <div className="rounded-xl">
             <Image 
                    src="/img/posts/6.webp"
                    width={400}
                    height={400}
                    className="h-[220px] rounded-xl"
                />
           </div>
            

            <h1 className="my-4 yekanbakhHeavy text-xl ">
            سفرنامه مشهد: سفر به مشهد 
            </h1>

            <div className="text-gray-600 text-sm flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                    <Link href="/">
                        تحریریه مجله سفر
                    </Link>
                    <span>
                    ۲۳ شهریور ۱۴۰۳
                    </span>
                </div>
                <div className="flex gap-1">
                    <GoCommentDiscussion />
                    <span>0</span>
                </div>
            </div>

            <div className="text-gray-600 text-base mt-6">
                <p>
                در جشنواره تابستانی کیش 1403 می‌توانید با تخفیف‌های خوبی خرید کنید، از تفریحات آبی لذت ببرید، در کنسرت و بر...
                </p>
            </div>
        </div>
    );
}