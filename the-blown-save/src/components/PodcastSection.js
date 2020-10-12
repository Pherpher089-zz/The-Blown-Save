import React, {useState} from 'react';

//Podcast site icons
import ApplePodcastIcon from '../imgs/Podcast_Icons/podcast_icon_512x512.png'
import OvercastIcon from '../imgs/Podcast_Icons/overcast_icon_512x512.png';
import RssIcon from '../imgs/Podcast_Icons/rss_icon_512x512.png';
import SpotifyIcon from '../imgs/Podcast_Icons/spotify_icon_512x512.png'
import StitcherIcon from '../imgs/Podcast_Icons/stitcher_icon_512x512.png';

// The current podcast audio section
import CurrentEpisode from '../audio/tbsp_ep32.mp3'

//Placing icons in array
const icons = [ApplePodcastIcon, OvercastIcon, 
    RssIcon, SpotifyIcon, StitcherIcon]

function PodcastSection(props) {
    return (
        <div className='podcast-container'>
            <div className='player-container'>
                <div className='player-inner'>
                    <div className="player-content">
                        <div className = "title-date">
                            <h1>Episode 12: World of Womans Wrestling</h1>
                            <p className="date">October 7th, 2020</p>
                        </div>
                        <audio className="player" controls src={CurrentEpisode}/>
                        <p> Here is an example of what a description will look like. I think it's going to need at least a few sentences. </p>
                    </div>
                </div>
            </div>
            <div className='podcast-icons'>
                {icons.map(icon => {
                    return(
                        <div className="podcast-icon"> <img src={icon}/> </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PodcastSection;
