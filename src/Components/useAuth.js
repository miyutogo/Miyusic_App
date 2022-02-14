import { useEffect, useState } from 'react';
import axios from 'axios';



function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()


    useEffect(() => { 
        axios
        .post('https://miyutogo.github.io/Miyusic_App/login', {
            code,
        })
        .then(res => {
            // console.log(res.data)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
        })
        .catch(() => {
            window.location = '/'
        })

    }, [code]) 

    useEffect(() => {
        if (refreshToken == null || expiresIn == null) return
        const interval = setInterval(() => {
            axios
                .post('https://miyutogo.github.io/Miyusic_App/refresh', {
                    refreshToken,
                })
                .then(res => {
                    //console.log('success refresh')
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn) 
                })
                .catch(err => {
                    console.log(err)
                    window.location = '/'
                })
            }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)

     }, [refreshToken, expiresIn])

    return accessToken  
}

export default useAuth