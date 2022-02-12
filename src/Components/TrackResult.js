import React from 'react'

function TrackResult({track, selectTrack}) {
    const handlePlayButton = () => {
        selectTrack(track)
    }
  return (
    <div 
        className='d-flex m-2 flex-shrink align-items-center'
        style={{ 
            cursor: "pointer",
            width: '400px',
            height: '100px',
            border: '1px solid',
            borderRadius: '15px',
            backgroundColor: 'cyan',
         }}
        onClick={handlePlayButton}
    >
        <img 
            src={track.albumUrl} 
            className='m-2'
            style={{
                height: '64px', 
                width: '64px'
            }}
        />
        <div 
            className='m-3'
            style={{
                

            }}>
            <div>{track.title}</div>
            <div>{track.artist}</div>
        </div>
    </div>
  )
}

export default TrackResult