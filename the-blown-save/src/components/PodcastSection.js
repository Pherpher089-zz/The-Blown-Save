import React from 'react';
import PlayIcon from '../imgs/play_icon.png'

function PodcastSection(props) {
    return (
        <div className='podcast-container'>
            <div className='player-container'>
                <div className='player-inner'>
                    <div className="player-content">
                        <img className="player-icon" src={PlayIcon} alt="Play Button"/>
                        <div className='player-text-container'>
                            <p className="date">October 7th, 2020</p>
                            <div className='title-and-length'>
                                <h1>Episode 12: World of Womans Wrestling</h1>
                                <p>1h20m</p>
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
