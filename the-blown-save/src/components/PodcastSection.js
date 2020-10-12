import React, {useState} from 'react';
 
import PlayIcon from '../imgs/play_icon.png'
import CurrentEpisode from '../audio/tbsp_ep32.mp3'

const audio = new Audio(CurrentEpisode);
audio.preload = "metadata"
function PodcastSection(props) {
    
    const [state, setState] = useState({
        isPlaying:false,
        pauseTime: null,
        episodeNum: 32,
        duration: audio.duration
    })

    const onPLay = () => {
        if(!state.isPlaying) {
            audio.play();
            setState({...state, isPlaying: true})
        } else {
            audio.pause();
            setState({...state, isPlaying: false})
        }
    }

    return (
        <div className='podcast-container'>
            <div className='player-container'>
                <div className='player-inner'>
                    <div className="player-content">
                        <img className="player-icon" src={PlayIcon} alt="Play Button" onClick={onPLay}/>
                        <audio controls={}/>
                        <div className='player-text-container'>
                            <p className="date">October 7th, 2020</p>
                            <div className='title-and-length'>
                                <h1>Episode 12: World of Womans Wrestling</h1>
                                <p>{audio.duration}</p>
                            </div>
                            <p>Description - Here is an example of what a description will look like. I think it's going to need at least a few sentences. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='podcast-icons'></div>
        </div>
    )
}

export default PodcastSection;
