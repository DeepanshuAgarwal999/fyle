import React from 'react'
import HeroSection from '../homesections/HeroSection'
import WhatWeDo from '../homesections/WhatWeDo'
import WhyChooseUs from '../homesections/WhyChooseUs'
import OurProject from '../homesections/OurProject'
import ExpertGrowth from '../homesections/ExpertGrowth'
import FeedBack from '../homesections/FeedBack'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div><HeroSection />
            <WhatWeDo />
            <WhyChooseUs />
            <OurProject />
            <ExpertGrowth />
            <FeedBack />
            <Footer />
        </div>
    )
}

export default Home