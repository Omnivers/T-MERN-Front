import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../Assets/Input/Input'
import { editProduct } from '../api/Products'
// import { useContext } from 'react'
// import { UserContext } from '../contexts/User';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Product = (id) => {
    // const { user, token } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            title: '',
            description:'',
            img: '',
            price: '',
            warranty_years:''
        },
        validationSchema: Yup.object({
            title: Yup.string(),
            description: Yup.string(),
            price: Yup.string(),
            img: Yup.string()
        }),
        onSubmit: async (values) => {
            await editProduct(id,values)
            window.location.reload(false);
        },
    })

    return (
        <Box  sx={style}
    
        >
          <Typography component="h1" variant="h5" sx={{mt:5}}>
            Edit the product
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
              Update the Product
            </Button>
            </Box>
        </Box>
    )
}
export default Product;