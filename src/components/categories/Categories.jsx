export default function Categories(){
    return(
        <section className="py-5 px-8 bg-[#ededed] ">
            <div className="flex flex-wrap justify-between">
                <Item 
                  title="جاهای دیدنی"
                  bgImg="/img/cat/1.webp"

                />
                <Item 
                  title="راهنمای سفر"
                  bgImg="/img/cat/2.webp"

                />
                <Item 
                  title="طبیعت گردی"
                  bgImg="/img/cat/3.jpg"

                />
                <Item 
                  title="جاذبه تاریخی"
                  bgImg="/img/cat/4.webp"

                />
                <Item 
                  title="جاهای تفریحی"
                  bgImg='/img/cat/5.webp'
                  
                />
                <Item 
                  title="بازارگردی"
                  bgImg="/img/cat/6.jpg"
                  
                />
                <Item 
                  title="هتل و اقامتگاه"
                  bgImg="/img/cat/7.webp"

  
                />
                <Item 
                  title="شکم گردی"
                  bgImg="/img/cat/8.webp"


                />
                <Item 
                  title="باغ و بوستان"
                  bgImg="/img/cat/9.jpg"


                />
                <Item 
                  title="سوغات"
                  bgImg='/img/cat/10.jpg'

                />

            </div>
        </section>
    );
}









function Item({ title , bgImg }){
    return(
        <div
            className="flex items-end w-[18%] mb-10 bg-contain h-[120px] rounded-lg"
            style={{
                backgroundImage:`url("${bgImg}")`,
            }}
        >
            <div className="bg-transparent w-full flex justify-center ">
                <div className="bg-white px-6 py-1 mb-2 rounded-lg shadow-[0x_0px_10px_10px_rgba(0,0,0,0.10)]">
                    <span className="text-lg yekanbakhBold">{title}</span>
                </div>
            </div>
           
        </div>
    )
}