import React from 'react';

const LibrarySong = ({song,songs,setCurrentSong})=>{
    const songSelectHandler = ()=>{
        const selectedSong = song;
        setCurrentSong(selectedSong)
    }
    return (
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover} alt=""/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
            
        </div>
    )
}

export default LibrarySong