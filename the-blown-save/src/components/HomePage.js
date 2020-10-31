import React from 'react';
import HeroSection from './HeroSection.js';
import PodcastSection from './PodcastSection.js';
import MerchSection from './MerchSection.js'
import LiveStream from './LiveStream.js'
function HomePage() {
    return (
        <div>
            <HeroSection />
            {/* <LiveStream /> */}
            <PodcastSection />
            <MerchSection />
        </div>
    )
}

export default HomePage;