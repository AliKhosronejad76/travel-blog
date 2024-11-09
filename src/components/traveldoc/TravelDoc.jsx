import PostItem from "../postitem/PostItem";
import BigPostItem from "../bigpostitem/BigPostItem";
import { posts } from "@/data";


export default function TravelDoc(){
    return(
        <section className="bg-white w-full rounded-xl p-6">
            {/* title  */}
            <div className="flex justify-between mb-5">
                <div className="flex gap-2 items-center">
                    <div className="bg-[#4ec18c] w-5 h-4"></div>
                    <h1 className="text-2xl yekanbakhFat">
                    پرونده سفر 
                    </h1>
                </div>
                {/* line */}
                <div
                    className="w-[77%] h-[9px] opacity-30 my-auto"
                    style={{
                        backgroundImage: "url('/img/line.png')"
                    }}
                >
                </div>
                {/* line */}

            </div>
            {/* title  */}
            <div className="w-full flex justify-between ">
                    <div className="w-[48%] ">
                        <BigPostItem/>
                    </div>

                    <div className="w-[49%]">
                       {posts.map((post,index)=> <PostItem post={post} />)}
                    </div>
            </div>
        
        </section>
    )
}