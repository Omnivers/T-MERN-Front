const signup = async (user) => {
    const request = await fetch(`${process.env.REACT_APP_BACKEND}auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    const response = await request.json()
    console.log(response)
    return response
}
const login = async (user) => {
    const request = await fetch(``, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    const response = await request.json()
    // console.log(response)
    return response
}
export { login,signup }