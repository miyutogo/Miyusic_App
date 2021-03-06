const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'https://miyutogo.github.io/Miyusic_App/',
        clientId: '9a14d7c8301240a3a0f999068d197353',
        clientSecret:'2c9681f88c3b4b08b0b46b9617472645',
    })

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            // console.log(data.body)
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => {
            // console.log(err)
            res.sendStatus(400)
        })
})

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'https://miyutogo.github.io/Miyusic_App/',
        clientId: '9a14d7c8301240a3a0f999068d197353',
        clientSecret:'2c9681f88c3b4b08b0b46b9617472645',
        refreshToken,
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            //console.log(data.body)
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
              })
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})


