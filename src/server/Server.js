const exp = require('express')
const SpotifyWebApi = require('spotify-web-api-node');
const app = exp();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '9a14d7c8301240a3a0f999068d197353',
        clientSecret:'2c9681f88c3b4b08b0b46b9617472645'
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken:data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() = {
        res.sendStatus(400)
    })
})
