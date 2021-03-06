import React from "react";
const LibrarySong = ({
	song,
	songs,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
	id,
}) => {
	const songSelectHandler = () => {
		const selectedSong = song;
		setCurrentSong(selectedSong);
		//Add active state
		const newSongs = songs.map((song) => {
			if (song.id === id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});

		setSongs(newSongs);
		if (isPlaying) audioRef.current.play();
	};
	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active ? "selected" : ""}`}
		>
			<img src={song.cover} alt="" />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
