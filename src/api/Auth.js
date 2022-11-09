const signup = async (user) => {
    const request = await fetch(`${process.env.REACT_APP_BACKEND}API/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    const response = await request.json()
    return (response)
}
const login = async (user) => {
    const request = await fetch(`${process.env.REACT_APP_BACKEND}API/auth/Login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    const response = await request.json()
    if(response ==='Wrong Password' || response ==='Wrong Username'){
        console.log("Invalid")
    }
    return response.accessToken
}

    
    







export { login,signup }