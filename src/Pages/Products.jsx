import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allProduct } from '../api/Products'
import Product from '../Assets/Product'

const Products = () => {
    const [products, setProducts] = useState(null)
    // const { id } = useParams()

    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line
    }, [])

    const fetchProduct = async () => {
        const request = await allProduct()
        setProducts(request)
        console.log(request)
    }

    if (!products) {
        return <p>loading</p>
    }
    return (
        <>
        {products.map(product=>
            <Product title={product.title} desc={product.description} img={product.img} price={product.price} ava={product.available} garantie={product.warranty_years} rating={product.rating} />
            )}
        </>
    )
}

export default Products;