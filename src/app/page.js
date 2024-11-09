import Tours from "@/components/tours/Tours";
import Categories from "@/components/categories/Categories";
import Services from "@/components/sidebar/services/Services";
import Popular from "@/components/sidebar/popular/Popular";
import LatestPosts from "@/components/latestposts/LatestPosts";
import Banner from "@/components/banner/Banner";
import TravelDoc from "@/components/traveldoc/TravelDoc";
import PostCol from "@/components/postCol/PostCol";



export default function Home() {
  return (
      <>
        <Banner />
        <LatestPosts/>
        <Categories/>
          <div className="w-full flex justify-between px-3">
              <div className="w-[70%] py-8 px-3">
                  <TravelDoc/>
                  <div className="flex justify-between my-8">
                    <PostCol/>
                    <PostCol/>
                  </div>
              </div>
              <div className="w-[30%] py-8 px-3">
                  <Popular/>
                  <Services/>
              </div>

          </div>

        <Tours/>
      </>
  )
}
