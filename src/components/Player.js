import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
	setSongs,
	setCurrentSong,
	songs,
	currentSong,
	isPlaying,
	setIsPlaying,
	audioRef,
	setSongInfo,
	songInfo,
}) => {
	useEffect(() => {
		const newSongs = songs.map((song) => {
			if (song.id === currentSong.id) {
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
	}, [currentSong]);
	//Time refactor
	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	//Event handler
	const playSongHandler = async () => {
		if (isPlaying) {
			setIsPlaying(!isPlaying);
			await audioRef.current.pause();
		} else {
			setIsPlaying(!isPlaying);
			await audioRef.current.play();
		}
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		}
		if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				if (isPlaying) audioRef.current.play();
				return;
			}
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
		}
		if (isPlaying) audioRef.current.play();
	};

	//Styling
	const trackAnim = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{songInfo.duration ? getTime(songInfo.currentTime) : "0:00"}</p>
				<div
					style={{
						background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
					}}
					className="track"
				>
					<input
						onChange={dragHandler}
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						type="range"
						name=""
						id=""
					/>
					<div style={trackAnim} className="animate-track"></div>
				</div>

				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("skip-back")}
					className="skip-back"
					size="2x"
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={playSongHandler}
					className="play"
					size="2x"
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("skip-forward")}
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
			</div>
		</div>
	);
};

export default Player;
