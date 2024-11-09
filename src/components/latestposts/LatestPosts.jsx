import Link from "next/link";
import Image from "next/image";


export default function LatestPosts(){
    return(
        <section className="pt-5 mt-5 pb-4">
            {/* Header */}
            <div className="px-8 flex items-center justify-between mb-4">
                
                <h1 className="w-[110px] text-nowrap text-3xl yekanbakhFat">
                    اخرین مقالات
                </h1>
                <div
                    className="w-[82%] h-[9px] opacity-30 my-auto"
                    style={{
                        backgroundImage: "url('/img/line.png')"
                    }}
                >

                </div>
            </div>
            {/* Header */}
            <div className="flex flex-wrap justify-between px-5">
                 <PostBox href="/" />
                 <PostBox href="/" />
                 <PostBox href="/" />
                 <PostBox href="/" />
                 <PostBox href="/" />
                 <PostBox href="/" />
                 <PostBox href="/" />
                 <PostBox href="/" />

            </div>
            <div className="w-full flex items-center justify-center py-8">
                 <Link href="/" className="text-white bg-yellow-500 w-[120px] h-[55px] rounded-lg flex items-center justify-center text-center transition duration-500 hover:bg-yellow-600">
                    ادامه مقالات
                 </Link>
            </div>
        </section>
    )
}

function PostBox({href}){
    return(
        <div className="bg-white rounded-xl w-[23%] mb-6 h-auto pb-1">
           <div className="relative ">
             <Image 
                    src="/img/posts/6.webp"
                    width={300}
                    height={350}
                    className="rounded-tr-xl rounded-tl-xl h-[200px]" 
                />
                <span className="bg-[#fdb713] px-3 py-1 text-white text-sm absolute top-0 right-0 rounded-tr-xl flex justify-center text-center ">
                        استان مازندران
                </span>
           </div>
           
            <div className="py-4 px-2">
                <Link  
                className="text-xl yekanbakhBold py-8 "
                href={href}
                >
                روستای سلین؛ سفر به توریستی‌ترین روستای کردستان 
                </Link>
            </div>
            
        </div>
    );
}