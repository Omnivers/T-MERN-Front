import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../Assets/Input/Input'
import { createProduct } from '../api/Products'
// import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../contexts/User';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



// Creation de produit
const Product = () => {
    const navigate = useNavigate()
    // const { user, token } = useContext(UserContext)

    // useEffect(() => {
    //     if (!user) {
    //         console.log('non user')
    //     }
    //     // eslint-disable-next-line
    // }, [user])

    const formik = useFormik({
        initialValues: {
            title: '',
            description:'',
            img: '',
            price: '',
            warranty_years:''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Your title is required'),
            description: Yup.string()
                .required('Content is required')
                .min(20, 'Content trop court'),
            price: Yup.string().required('Price is required'),
            img: Yup.string()
            .required('Please enter website')
        }),
        onSubmit: async (values) => {
            await createProduct(values)
            navigate("/Products")
        },
    })

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{mt:5}}>
            Add a product
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <Input
                type="text"
                name="title"
                placeholder="title"
                value={formik.values.title}
                handleChange={formik.handleChange}
                error={formik.errors.title}
            />
            <Input
                type="text"
                name="description"
                placeholder="Description"
                value={formik.values.description}
                handleChange={formik.handleChange}
                error={formik.errors.description}
            />
            <Input
                type="number"
                name="price"
                placeholder="Price"
                value={formik.values.price}
                handleChange={formik.handleChange}
                error={formik.errors.price}
            />
            <Input
                type="number"
                name="warranty_years"
                placeholder="Warraty years"
                value={formik.values.warranty_years}
                handleChange={formik.handleChange}
                error={formik.errors.warranty_years}
            />
            <Input
                type="link"
                placeholder='Link an Image Url'
                name="img"
                value={formik.values.img}
                handleChange={formik.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit the product
            </Button>
            </Box>
        </Box>
      </Container>
    )
}
export default Product;