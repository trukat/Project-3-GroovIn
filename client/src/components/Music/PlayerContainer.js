import { useState, useEffect } from 'react';
import Player from './Player';
import './Player.css'


function PlayerContainer(props) {
    const [songs] = useState([
        {
            title: "Tadow",
            artist: "Fkj & Masego",
            img_src: "./Images/Cover-1.png",
            src: "./Music/Song-2.mp3"
        },
        {
            title: "West Coast",
            artist: "James Vicent Mc",
            img_src: "./Images/Cover-1.png",
            src: "./music/Song-1.mp3"
        },
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    return (
        <div className="App">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
        </div>
    );
}

export default PlayerContainer;