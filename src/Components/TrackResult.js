import React from 'react'

function TrackResult({track}) {

  return (
    <div 
        className='d-flex m-2 align-items-center'
        onClick={handlePlayButton}
    >
        <img src={track.albumUrl} style={{height: '64px', width: '64px'}}/>
        <div className='m-3'>
            <div>{track.title}</div>
            <div>{track.artist}</div>
        </div>
    </div>
  )
}

export default TrackResult