import { createContext, useEffect, useState } from 'react'
import { me } from '../api/User'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const localToken = localStorage.getItem('token')

        if (localToken) {
            setToken(localToken)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token)
            getMe()
        }
        // eslint-disable-next-line
    }, [token])

    const getMe = async () => {
        const userResponse = await me(token)
        setUser(userResponse)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    const value = {
        setToken,
        user,
        logout,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
