import React, { useState } from "react";

const UploadAudio = (props) => { 
    const [selectedSong, setSelectedSong] = useState();

    const addMusic = (e) => {
        if (e.target.files[0]) {
            setSelectedSong({
                name: e.target.files[0].name,
                song: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    return (
        <div className="d-flex justify-content-center my-4">
            <span className="block-example border border-success">
                <input type="file" onChange={addMusic} />
                <button onClick={() => props.addToPlaylist(selectedSong)} className="btn btn-success ">Add Song</button>
            </span>
        </div>
    );
};

export default UploadAudio;