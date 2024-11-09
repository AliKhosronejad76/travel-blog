import PostItem from "@/components/postitem/PostItem";
import { popularPosts } from "@/data";

export default function Popular(){
    
    return(
        <div className="bg-white rounded-xl py-7 px-3 mb-7">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="w-[80px] text-nowrap text-xl yekanbakhHeavy">
                    پربازدیدترین ها 
                    </h1>
                    <div
                        className="w-[50%] h-[9px] opacity-30 my-auto"
                        style={{
                            backgroundImage: "url('/img/line.png')"
                        }}
                    >

                    </div>
                </div>

                <div className="mt-7">
                        {
                            popularPosts.map((post , index )=><PostItem key={index} post={post}/>)
                        }
                </div>
               
        </div>
    );
}