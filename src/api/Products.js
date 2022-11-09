const createProduct = async (value, token) => {
  const request = await fetch(`${process.env.REACT_APP_BACKEND}API/products/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value),
  })

  const response = await request.json()
  return response
}

const allProduct = async () => {
  const request = await fetch(`${process.env.REACT_APP_BACKEND}API/products/`)
  const response = await request.json()

  return response
}

const oneProduct = async (id) => {
  const request = await fetch(
      `${process.env.REACT_APP_BACKEND}API/products/${id}`
  )
  const response = await request.json()
  return response
}

export { createProduct, oneProduct, allProduct}