import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

function MusicPlayer({accessToken, trackUri}) {
  if (accessToken === null) return
  
    return (
    <SpotifyPlayer 
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
    />
  )
}

export default MusicPlayer