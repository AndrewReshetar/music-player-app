import React from 'react'

function LibrarySong({ song, setCurrentSong, audioRef, isPlaying, songs, setSongs }) {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    const newSongs = songs.map(s => {
      if (s.id === song.id) {
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
    if (isPlaying) audioRef.current.play();
  }

  return (
    <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
