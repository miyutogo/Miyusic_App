import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useAuth() {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
    
    useEffect(() => { 
        axios
        .post('http://localhost:3001/login', {
            code,
        }).then(res => {
            console.log(res.data)
        })
    }, [code])
}

export default useAuth