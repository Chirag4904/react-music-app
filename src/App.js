import React, { useState, useRef } from "react";
import "./styles/app.scss";
//ADDING COMPONENTS
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./util";
import Nav from "./components/Nav";

function App() {
	//References
	const audioRef = useRef(null);
	//States

	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);

	//function
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime: current, duration: duration });
	};

	return (
		<div className="App">
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} />
			<Player
				audioRef={audioRef}
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				setSongInfo={setSongInfo}
				songInfo={songInfo}
				songs={songs}
				setCurrentSong={setCurrentSong}
			/>
			<Library
				libraryStatus={libraryStatus}
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setSongs={setSongs}
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
