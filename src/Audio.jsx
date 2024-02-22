import React,{ useState } from "react";
import UploadAudio from "./components/Uploadaudio";
import Playlist from "./components/Playlist";
import Playsong from "./components/Playsong";

const Audio = (props) => {
    const [playList, setPlayList] = useState([]);
    const [currentSong, setCurrentSong] = useState();

    const handleAddSong = (selectedSong) => {
        if(selectedSong){
            let newPlayList = [...playList];
            newPlayList.push(selectedSong);
            setPlayList(newPlayList);
        }
    }

    const handlePlaySong = (song) => {
        setCurrentSong(song)
    }

    const playNextSong = () => {
        let currentSongIndex = playList.findIndex(song => song.name === currentSong.name);
        if(currentSongIndex != playList.length){
            let newSongIndex = currentSongIndex + 1
            setCurrentSong(playList[newSongIndex])
        }
    }

    return(
        <>
            <UploadAudio addToPlaylist={handleAddSong} />
            {currentSong && 
                <Playsong 
                    playSong={currentSong}
                    playNextSong={playNextSong}
                />
            }
            <Playlist playList={playList} playSong={handlePlaySong} />
        </>
    )
}

export default Audio