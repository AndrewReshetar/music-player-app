import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

function Player({ audioRef, currentSong, setCurrentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, setSongs }) {
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  }

  const activeLibraryActive = (nextPrev) => {
    const newSongs = songs.map(s => {
      if (s.id === nextPrev.id) {
        return {
          ...s,
          active: true
        }
      } else {
        return {
          ...s,
          active: false
        }
      }
    })
    setSongs(newSongs)
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      activeLibraryActive(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeLibraryActive(songs[songs.length - 1])
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeLibraryActive(songs[(currentIndex - 1) % songs.length])
    }
    if (isPlaying) audioRef.current.play();
  }

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{ background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]} )` }} className="track">
          <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} />
          <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className='skip-back' icon={faAngleLeft} size='2x' />
        <FontAwesomeIcon onClick={playSongHandler} className='play' icon={isPlaying ? faPause : faPlay} size='2x' />
        <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className='skip-forward' icon={faAngleRight} size='2x' />
      </div>
    </div>
  )
}

export default Player
