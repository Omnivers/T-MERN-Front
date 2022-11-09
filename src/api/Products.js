//Delete a product 







// Create a product
const createProduct = async (values, token) => {
  const request = await fetch(`${process.env.REACT_APP_BACKEND}API/products/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
  })

  const response = await request.json()
  console.log(response)
  return response
}

// Get all products
const allProduct = async () => {
  const request = await fetch(`${process.env.REACT_APP_BACKEND}API/products/`)
  const response = await request.json()

  return response
}

// Get one product by id aka Find
const oneProduct = async (id) => {
  const request = await fetch(
      `${process.env.REACT_APP_BACKEND}API/products/${id}`
  )
  const response = await request.json()
  return response
}


export { createProduct, oneProduct, allProduct}