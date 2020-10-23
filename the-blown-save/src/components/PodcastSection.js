import React, { useState } from 'react';

//Podcast site icons
import ApplePodcastIcon from '../imgs/Podcast_Icons/podcast_icon_512x512.png';
import OvercastIcon from '../imgs/Podcast_Icons/overcast_icon_512x512.png';
import SpotifyIcon from '../imgs/Podcast_Icons/spotify_icon_512x512.png';
import AmazonMusicIcon from '../imgs/Podcast_Icons/amazonMusic_icon_512.png';
import CastBoxIcon from '../imgs/Podcast_Icons/castbox_icon_512.png';
import GooglePodcastsIcon from '../imgs/Podcast_Icons/google_icon_512.png';
import IHeartRadioIcon from '../imgs/Podcast_Icons/iHeartRadio_icon_512.png';
import JiosaavnIcon from  '../imgs/Podcast_Icons/jiosaavn_icon_512.png';
import PodcastAddictIcon from '../imgs/Podcast_Icons/podcastAddict_icon_512.png';
import PodchaserIcon from '../imgs/Podcast_Icons/podchaser_icon_512.png'
import SpreakerIcon from '../imgs/Podcast_Icons/spreaker_icon_512.png'


// The current podcast audio section
import CurrentEpisode from '../audio/tbsp_ep32.mp3'

//Placing icons in array
const icons = [
    {img: ApplePodcastIcon, link: "https://podcasts.apple.com/us/podcast/the-blown-save-podcast/id1502906135"}, 
    {img: OvercastIcon, link: 'https://overcast.fm/itunes1502906135/the-blown-save-podcast'}, 
    {img: SpotifyIcon, link: 'https://open.spotify.com/show/3BUZ3DaMCPxvDAFje32Zcj'},
    {img: AmazonMusicIcon, link: 'https://music.amazon.com/podcasts/0a973015-14fa-4b4c-835a-0bb69897a582/The-Blown-Save-Podcast'}, 
    {img: CastBoxIcon, link: 'https://castbox.fm/channel/The-Blown-Save-Podcast-id2714976?country=us'}, 
    {img: GooglePodcastsIcon, link: 'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDI0NzcxNy9lcGlzb2Rlcy9mZWVk'}, 
    {img: IHeartRadioIcon, link: 'https://www.iheart.com/podcast/966-the-blown-save-podcast-59800855/'}, 
    {img: JiosaavnIcon, link: 'https://www.jiosaavn.com/shows/the-blown-save-podcast/1/c67N,40piGg_'}, 
    {img: PodcastAddictIcon, link: 'https://podcastaddict.com/podcast/2585688'}, 
    {img: SpreakerIcon, link:'https://www.spreaker.com/show/the-blown-save-podcast'}
]

function PodcastSection(props) {

    return (
        <div className='podcast-container'>
            <div className='player-container'>
                <div className='player-inner'>
                    <div className="player-content">
                        <div className="title-date">
                            <h1>The Blown Save Ep32</h1>
                            <p className="date">October 9th, 2020</p>
                        </div>
                        <audio className="player" controls src={CurrentEpisode} />
                        <p className='description'> Here is an example of what a description will look like. I think it's going to need at least a few sentences. </p>
                    </div>
                </div>
            </div>
            <div className='podcast-icons'>
                {icons.map(icon => {
                    return (
                        <a href={icon.link}>
                            <div className="podcast-icon"> <img src={icon.img} /> </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default PodcastSection;
