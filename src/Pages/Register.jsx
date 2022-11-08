import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from "../Assets/Input/Input"
// import { signup } from '../api/Auth'



export default function Register() {
  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validationSchema: Yup.object({
        email: Yup.string()
            .required('Your email is required')
            .email('Your email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'password trop court')
            .max(30),
    }),
    onSubmit: (values) => {
        // signup(values)
        console.log(values)
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // value={formik.values.email}
                    handleChange={formik.handleChange}
                    error={formik.errors.email}
                />
            <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    // value={formik.values.password}
                    handleChange={formik.handleChange}
                    error={formik.errors.password}
                />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
  );
}