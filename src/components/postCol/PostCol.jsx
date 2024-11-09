import BigPostItem from "../bigpostitem/BigPostItem";
import PostItem from "../postitem/PostItem";
import { posts } from "@/data";

export default function PostCol(){
    return(
        <div className="w-[48%] bg-white p-6 rounded-xl ">
            <BigPostItem/>
            <div className="mt-5">
                {posts.map((post , index )=><PostItem key={index} post={post}/>)}
            </div>

        </div>
    );
}