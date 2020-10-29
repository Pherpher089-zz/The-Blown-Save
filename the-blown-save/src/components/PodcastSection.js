import React, { useState, useEffect } from 'react';

//Podcast site icons
import ApplePodcastIcon from '../imgs/Podcast_Icons/podcast_icon_512x512.png';
import OvercastIcon from '../imgs/Podcast_Icons/overcast_icon_512x512.png';
import SpotifyIcon from '../imgs/Podcast_Icons/spotify_icon_512x512.png';
import AmazonMusicIcon from '../imgs/Podcast_Icons/amazonMusic_icon_512.png';
import CastBoxIcon from '../imgs/Podcast_Icons/castbox_icon_512.png';
import GooglePodcastsIcon from '../imgs/Podcast_Icons/google_icon_512.png';
import IHeartRadioIcon from '../imgs/Podcast_Icons/iHeartRadio_icon_512.png';
import JiosaavnIcon from '../imgs/Podcast_Icons/jiosaavn_icon_512.png';
import PodcastAddictIcon from '../imgs/Podcast_Icons/podcastAddict_icon_512.png';
import PodchaserIcon from '../imgs/Podcast_Icons/podchaser_icon_512.png'
import SpreakerIcon from '../imgs/Podcast_Icons/spreaker_icon_512.png'

//Back Ground imgs
import Hero_Img_00 from '../imgs/Hero/Hero_Img_00.png';
import Hero_Img_01 from '../imgs/Hero/Hero_Img_01.png';
import Hero_Img_02 from '../imgs/Hero/Hero_Img_02.png';
//import Hero_Img_03 from '../imgs/Hero/Hero_Img_03.png';
import Hero_Img_04 from '../imgs/Hero/Hero_Img_04.png';
import Hero_Img_05 from '../imgs/Hero/Hero_Img_05.png';
import Hero_Img_06 from '../imgs/Hero/Hero_Img_06.png';

// The current podcast audio section
const icons = [
    { img: ApplePodcastIcon, link: "https://podcasts.apple.com/us/podcast/the-blown-save-podcast/id1502906135" },
    { img: OvercastIcon, link: 'https://overcast.fm/itunes1502906135/the-blown-save-podcast' },
    { img: SpotifyIcon, link: 'https://open.spotify.com/show/3BUZ3DaMCPxvDAFje32Zcj' },
    { img: AmazonMusicIcon, link: 'https://music.amazon.com/podcasts/0a973015-14fa-4b4c-835a-0bb69897a582/The-Blown-Save-Podcast' },
    { img: CastBoxIcon, link: 'https://castbox.fm/channel/The-Blown-Save-Podcast-id2714976?country=us' },
    { img: GooglePodcastsIcon, link: 'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDI0NzcxNy9lcGlzb2Rlcy9mZWVk' },
    { img: IHeartRadioIcon, link: 'https://www.iheart.com/podcast/966-the-blown-save-podcast-59800855/' },
    { img: JiosaavnIcon, link: 'https://www.jiosaavn.com/shows/the-blown-save-podcast/1/c67N,40piGg_' },
    { img: PodcastAddictIcon, link: 'https://podcastaddict.com/podcast/2585688' },
    { img: SpreakerIcon, link: 'https://www.spreaker.com/show/the-blown-save-podcast' }
]

const backgroundImgs = [Hero_Img_00, Hero_Img_01, Hero_Img_02, , Hero_Img_04, Hero_Img_05, Hero_Img_06]

const backgroundStyle = {
    "backgroundImage": `url(${backgroundImgs[Math.floor(Math.random() * 6)]})`
}

function PodcastSection(props) {
    return (
        <div className='podcast-container' style={backgroundStyle}>
            <div className='player-container'>
                <div className='player-inner'>
                    <Podcast />
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

function Podcast() {
    const [initialized, setInitialized] = useState(false)
    const [currentEpisode, setCurrentEpisode] = useState()

    const RSS_URL = `https://cors-anywhere.herokuapp.com/https://www.spreaker.com/show/4247717/episodes/feed`;

    const getFeed = () => {
        fetch(RSS_URL)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                console.log(data.querySelectorAll("item")[0])
                const rssData = data.querySelectorAll('item')[0];
                setCurrentEpisode({
                    url: rssData.querySelector('enclosure').getAttribute('url'),
                    title: rssData.querySelector('title').innerHTML,
                    date: rssData.querySelector('pubDate').innerHTML.substring(0, 16),
                    description: rssData.querySelector('description')
                });
            })
    }
    //Placing icons in array

    useEffect(() => {
        if (!initialized) {
            getFeed();
            setInitialized(true)
        } else {
            console.log(currentEpisode)
        }
    })

    if (!initialized || currentEpisode == null) {
        return (
            <h1 className="loading">Loading...</h1>
        )
    } else {
        return (
            <div className="player-content">
                <div className="title-date">
                    <h1>{currentEpisode.title}</h1>
                    <p className="date">{currentEpisode.date}</p>
                </div>
                <audio className="player" controls src={currentEpisode.url} />
                <p className='description'>Gadda Figure This out</p>
            </div>
        )
    }
}

export default PodcastSection;
