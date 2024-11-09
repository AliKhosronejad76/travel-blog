export default function Tours(){
    return(
        <section
            className="bg-[#fdb713] py-12 px-5"
        >

            <div className="w-full flex justify-between flex-wrap ">
                <Item bgImg={"/img/tours/home_dubai.webp"} title="دبی"/>
                <Item bgImg={"/img/tours/home_istanbul.webp"} title="استامبول"/>
                <Item bgImg={"/img/tours/home_kish.webp"} title="کیش"/>
                <Item bgImg={"/img/tours/home_shiraz.webp"} title="شیراز"/>
                <Item bgImg={"/img/tours/home_mashhad.webp"} title="مشهد"/>
                <Item bgImg={"/img/tours/home_isfahan.webp"} title="اصفهان"/>
                <Item bgImg={"/img/tours/home_qeshm.webp"} title="قشم"/>
                <Item bgImg={"/img/tours/home_tehran.webp"} title="تهران"/>
            </div>
        </section>
    );
}

function Item({ title , bgImg }){
    return(
        <div
            className="flex items-end w-[23%] mb-10 bg-contain h-[150px] rounded-lg"
            style={{
                backgroundImage:`url("${bgImg}")`,
            }}
        >
            <div className="bg-transparent w-full flex justify-center ">
                <div className="bg-white px-12 py-1 mb-4 rounded-lg shadow-[0x_0px_10px_10px_rgba(0,0,0,0.10)]">
                    <span className="text-lg yekanbakhBold">{title}</span>
                </div>
            </div>
           
        </div>
    )
}