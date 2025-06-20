import CustomSlider from '@/Components/HomePageComponents/HeroSection/Slider/Slider'
import BuySection from '@/Components/HomePageComponents/HomePageStore/HomePageStore'
import HotGames from '@/Components/HomePageComponents/HotGames/HotGames'
import HotSales from '@/Components/HomePageComponents/HotSales/HotSales'
import LatestNews from '@/Components/HomePageComponents/LatestNews/LatestNews'
import PaymentMethods from '@/Components/HomePageComponents/PaymentMethods/PaymentMethod'
import TestimonialSection from '@/Components/HomePageComponents/Testimonial/Testimonial'
import WhyWe from '@/Components/HomePageComponents/WhyWe/WhyWe'
import React from 'react'

const Page = () => {
  return (
    <div>
      <CustomSlider />
      <BuySection />
      <HotGames />
      <HotSales />
      <TestimonialSection />
      <WhyWe />
      <LatestNews />
      <PaymentMethods />
    </div>
  )
}

export default Page