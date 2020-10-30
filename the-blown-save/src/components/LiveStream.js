import React from 'react';
import ReactLivestream from 'react-livestream'
import WhiteNoise from '../imgs/white_noise.gif'

function LiveStream() {
    return (
        <div className='live-stream-container' >
            <ReactLivestream
                className='live-stream'
                platform="youtube"
                youtubeApiKey='AIzaSyDxC4SstM4akaTjwYrrAe7pPv9VDfxDrpQ'
                youtubeChannelId="UCXhaOiubzakuGc4YGj_0XSw"
                offlineComponent={<OfflineComponent />}
            />
        </div>
    )
}

function OfflineComponent() {
    return (
        <div className='offline-component' style={{ 'backgroundImage': `url(${WhiteNoise})` }}>
            <h1>Sorry, we're offline right now. {'\n'}Check out our live stream here at 8:00 PM Pacific October 30th 2020! </h1>
            <p>Subscribe <a href='https://www.youtube.com/channel/UCXhaOiubzakuGc4YGj_0XSw' target="_blank" >here</a> to make sure you don't miss out</p>
        </div>
    )
}

export default LiveStream