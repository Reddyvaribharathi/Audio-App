import React, { useState } from "react";

const Playlist = (props) => {
    const { playList, playSong } = props;

    return (
        <div className="d-flex my-4 row">
            <div className="col-4"></div>
            <div className="d-flex justify-content-center col-4 flex-column">
                <div className="justify-content-center">Playlist:</div>
                {playList.map(song  => {
                    return (
                        <button key={song?.name} className="btn gradient_background m-1" onClick={() => playSong(song)}>{song?.name?.split(".")?.[0]}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Playlist;