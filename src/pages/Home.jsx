import React from "react";
import VideoBackground from "../components/VideoBackground";
import BannerAds from "../components/homeComponent/BannerAds";
import HomeContactUs from "../components/homeComponent/HomeContactUs.jsx";
import Testimonials from "../components/homeComponent/Testimonials.jsx";
import TrendingDestination from "../components/homeComponent/TrendingDestination.jsx";
import Hero from "../components/homeComponent/Hero.jsx";
import TopMostBanner from "../components/homeComponent/TopMostBanner.jsx";
import VerifiedTransportCard from "../components/homeComponent/VerifiedTransportCard.jsx";
import TourPackages from "../components/homeComponent/TourPackages.jsx";



const Home = () => {
  return (
    <div>
       <TopMostBanner/>
       <Hero/>
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold"></h2>
        <p className="mt-4 text-gray-600">
          
        </p>
      </section>
      <div> 
        <BannerAds/>
        <VerifiedTransportCard />
        <TrendingDestination />
        <TourPackages />
        <HomeContactUs/>
        <Testimonials />

      </div>
    </div>   
  );
};

export default Home; 
