import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
	// console.log(audioRef);
	return (
		<div className="library">
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map((song) => (
					<LibrarySong
						audioRef={audioRef}
						key={song.id}
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						isPlaying={isPlaying}
					/>
				))}
			</div>
		</div>
	);
};
export default Library;
