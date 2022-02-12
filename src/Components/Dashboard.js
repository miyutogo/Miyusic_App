import React, { useEffect, useState } from 'react';
import useAuth from './useAuth'
import TrackResult from './TrackResult'
import {Container, Form, Card, Typography} from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: "9a14d7c8301240a3a0f999068d197353",
})

function Dashboard({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (accessToken == null) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])
  
  useEffect(() => {
    if (search == null) return setResults ([])
    if (accessToken == null) return
    let cancel = false

    spotifyApi.searchTracks(search)
      .then(res => {
        if (cancel) return
        setResults(res.body.tracks.items.map(track => {
          const albumImg = track.album.images.reduce(
            (smallest,image) => {
              if (image.height < smallest.height ) return image 
              return smallest
          }, track.album.images[0]
        )

        return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: albumImg.url
          }
        }))
      })
      return() =>  cancel = true
  }, [search, accessToken])

  return (
    <Container>
        <Form.Control type='search' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
        <div>
          {results.map(track => (
            <TrackResult track={track} key={track.uri} />
          ))}
        </div>
    </Container>
  )
}

export default Dashboard