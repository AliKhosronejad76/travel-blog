import Image from "next/image";

export default function Banner(){
    return(
        <section 
        className="
            flex
            flex-wrap
            gap-1
            justify-center
            px-5
            [&>:nth-child(1)]:w-[49%]
            [&>:nth-child(2)]:w-[49%]
            [&>:nth-child(3)]:w-[30%]
            [&>:nth-child(4)]:w-[30%]
            [&>:nth-child(5)]:w-[30%]

            [&>:nth-child(1)>p]:text-2xl
            [&>:nth-child(2)>p]:text-2xl
            [&>:nth-child(3)>p]:text-base
            [&>:nth-child(4)>p]:text-base
            [&>:nth-child(5)>p]:text-base
            

        ">
          
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>

           
            
          
        </section>
    );
}

function Box(){
    return(
        <div className="relative rounded-xl">
            <div className="cu-bg rounded-xl absolute z-30 top-[100px] bottom-0 left-0 right-0"></div>
            <Image 
                src="/img/posts/6.webp"
                width={700}
                height={700}
                className="relative z-20 rounded-xl"
            />
            <p className="yekanbakhFat absolute z-50 bottom-[15px] leading-relaxed text-white text-justify px-3">
            آرامگاه فردوسی مشهد؛ از قبر فراموش شده تا مقبره‌ای بزرگ
            </p>
        </div>
    );
}