import React, { useState, useRef } from "react";
import "./styles/app.scss";
//ADDING COMPONENTS
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./util";

function App() {
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime: current, duration: duration });
	};
	//References
	const audioRef = useRef(null);
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div className="App">
			<Song currentSong={currentSong} />
			<Player
				audioRef={audioRef}
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				setSongInfo={setSongInfo}
				songInfo={songInfo}
			/>
			<Library
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
			/>
			<audio
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
			></audio>
		</div>
	);
}

export default App;
