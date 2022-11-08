const me = async (token) => {
    console.log(token)
    const request = await fetch(``, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
}

export { me }