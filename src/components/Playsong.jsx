import React, { useEffect, useState } from "react";

const Playsong = (props) => {
    const {name, song} = props?.playSong;
    const { playNextSong } = props
    let audioComp;
    
    useEffect(() => {
        audioComp = document.querySelector("#mySong");
        let songInfoData = JSON.parse(localStorage.getItem("songInfo") || "{}"); 
        if(songInfoData && songInfoData.name === name){
            audioComp.currentTime = songInfoData.time
        }

        audioComp.play()
        audioComp.onended = () => {
            playNextSong()
        }

        return () => {
            let songInfo = {
                name: name,
                time: audioComp.currentTime
            }
            songInfo = JSON.stringify(songInfo);
            localStorage.setItem("songInfo", songInfo)
        }
    }, [props?.playSong])

    return (
        <div className="d-flex my-4 row">
            <div className="col-4"></div>
            <div className="flex-column justify-content-center col-4">
                Listen to the {name?.split(".")?.[0]}:
                <audio id="mySong" controls autoplay src={song}></audio>
            </div>
        </div>
    )
}

export default Playsong;