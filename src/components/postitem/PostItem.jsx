import Image from "next/image";
import Link from "next/link";


export default function PostItem({post}){
  
    return(
        <Link href="/" className="w-full flex justify-between mb-8 text=gray-700">
            <div className="w-max rounded-xl">
                <Image 
                   src={post.img}
                   width={200}
                   height={200}
                   alt={post.title}
                   className="min-w-[85px] max-w-[85px] h-[75px] object-cover rounded-xl"
                 />
            </div>
            <div className="flex flex-col w-max  mr-2 gap-3">
                <p className="text-sm yekanbakhMed ">{post.title}</p>

                <div className="text-base text-red-600">
                    <sapn>1,236 بازدید</sapn>
                </div>
            </div>
        </Link>
    );
}