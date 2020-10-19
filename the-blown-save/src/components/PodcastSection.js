import React, {useState} from 'react';
import Hero_00 from '../imgs/Hero/Hero_Img_00.jpg'
import Hero_01 from '../imgs/Hero/Hero_Img_01.png'
import Hero_02 from '../imgs/Hero/Hero_Img_02.png'
import Hero_03 from '../imgs/Hero/Hero_Img_03.png'
import Hero_04 from '../imgs/Hero/Hero_Img_04.png'
import Hero_05 from '../imgs/Hero/Hero_Img_05.png'

//Podcast site icons
import ApplePodcastIcon from '../imgs/Podcast_Icons/podcast_icon_512x512.png'
import OvercastIcon from '../imgs/Podcast_Icons/overcast_icon_512x512.png';
import RssIcon from '../imgs/Podcast_Icons/rss_icon_512x512.png';
import SpotifyIcon from '../imgs/Podcast_Icons/spotify_icon_512x512.png'
import StitcherIcon from '../imgs/Podcast_Icons/stitcher_icon_512x512.png';

// The current podcast audio section
import CurrentEpisode from '../audio/tbsp_ep32.mp3'

//Placing icons in array
const icons = [{img:ApplePodcastIcon, link:"https://podcasts.apple.com/us/podcast/the-blown-save-podcast/id1502906135"},{ img: OvercastIcon, link:'https://overcast.fm/itunes1502906135/the-blown-save-podcast'}, {img: SpotifyIcon, link: 'https://open.spotify.com/show/3BUZ3DaMCPxvDAFje32Zcj'}]

function PodcastSection(props) {
    const heroArr = [Hero_00, Hero_01, Hero_02, Hero_03, Hero_04, Hero_05]

    const backgroundStyle = {
        backgroundImage: `${heroArr[Math.random(0,heroArr.length - 1)]}` 
    }
    console.log(backgroundStyle)
    return (
        <div className='podcast-container'>
            <div className='player-container'>
                <div className='player-inner'>
                    <div className="player-content">
                        <div className = "title-date">
                            <h1>The Blown Save Ep32</h1>
                            <p className="date">October 9th, 2020</p>
                        </div>
                        <audio className="player" controls src={CurrentEpisode}/>
                        <p> Here is an example of what a description will look like. I think it's going to need at least a few sentences. </p>
                    </div>
                </div>
            </div>
            <div className='podcast-icons'>
                {icons.map(icon => {
                    return(
                        <a href={icon.link}>
                            <div className="podcast-icon"> <img src={icon.img}/> </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default PodcastSection;
