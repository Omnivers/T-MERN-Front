import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { oneProduct } from '../api/Product'
import Product from '../Assets/Product'

const Products = () => {
    // const [product, setProduct] = useState(null)
    // const { id } = useParams()

    // useEffect(() => {
    //     // fetchProduct()
    //     // eslint-disable-next-line
    // }, [])

    // // const fetchProduct = async () => {
    // //     const request = await oneProduct(id)
    // //     setProduct(request)
    // // }

    // if (!product) {
    //     return <p>loading</p>
    // }
    return (
        <>
            <Product  />
        </>
    )
}

export default Products;