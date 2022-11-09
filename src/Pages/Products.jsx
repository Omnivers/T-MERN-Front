import { useEffect, useState } from 'react'
import { allProduct } from '../api/Products'
import Product from '../Assets/Product'
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { Link} from 'react-router-dom';

// Deploiment de tous les produits
const Products = () => {
    const [products, setProducts] = useState(null)

    // Fetch des products depuis notre DATABASE
    useEffect(() => {
        fetchProduct() 
        // eslint-disable-next-line
    }, [])
    
    const fetchProduct = async () => {
        const request = await allProduct()
        setProducts(request)
        // console.log(request)
    }

    //Loading le temps que le fetch soit réalisé 
    if (!products) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
      )
    }
    return (
        <>
        <Typography sx={{mt:10, color:'white',display:'flex',justifyContent:'center'}} component="h1" variant="h5">
            Products
        </Typography>
        <Grid sx={{justifyContent:'center'}}item xs={12} sm container><Link to={'/NewProduct'}><AddIcon sx={{color:"white",cursor:"pointer",width: 100,height:100}} /></Link></Grid>
        {products.map(product=>
            <Product id={product._id} title={product.title} desc={product.description} img={product.img} price={product.price} ava={product.available} garantie={product.warranty_years} rating={product.rating} fetchProduct={fetchProduct}/>
            )}
        </>
    )
}

export default Products;