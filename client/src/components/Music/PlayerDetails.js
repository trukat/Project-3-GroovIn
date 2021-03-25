import React from 'react';

function Details(props) {
    return (

        <div className="c-player-details">
            <div className="details-img">
                <img src={props.song.img_src} alt="" />
            </div>
            <h4 className="details-title">{props.song.title}</h4>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>

    )
}

export default Details;
