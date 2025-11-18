import NavNotification from '@/components/common/NavNotification'
import AboutSection from '@/components/home/AboutSection'
import Booklet from '@/components/home/Booklet'
import HeroSwiper from '@/components/home/HeroSwiper'
import ProductsSwiper from '@/components/home/ProductsSwiper'
import TrendingProducts from '@/components/home/TrendingProducts'
import React from 'react'

const Home = () => {
  return (
    <>
      <NavNotification/>
      <HeroSwiper />
      <TrendingProducts/>
      <AboutSection/>
      <Booklet/>
      <ProductsSwiper/>
    </>
  )
}

export default Home