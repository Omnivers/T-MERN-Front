const me = async (token) => {
    const request = await fetch(`${process.env.REACT_APP_BACKEND}API/user`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
}

export { me }