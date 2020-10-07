import React from 'react';

function PodcastSection(props) {
    return (
        <div className='podcast-container'>
            <div className='player-container'>
                <div className='player-inner'>
                    <div className="player-content">
                        <img src="" alt=""/>
                        <div className='player-text-container'>
                            <p>Date</p>
                            <div className='title-and-date'>
                                <h1>Title</h1>
                                <p>date</p>
                            </div>
                            <p>Description - Here is an example of what a description will look like. I think it's going to need at least a few sentences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PodcastSection;
