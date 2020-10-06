import React from 'react';
import HeroSection from './HeroSection';
import PodcastSection from './PodcastSection';
import MerchSection from './MerchSection'

function HomePage(){
    return (
        <div>
            <HeroSection />
            <PodcastSection />
            <MerchSection />
        </div>
    )
}

export default HomePage;