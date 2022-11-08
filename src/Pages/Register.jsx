import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Grid from '@mui/material/Grid';
import { Link} from 'react-router-dom';
import Input from "../Assets/Input/Input";
import { signup } from '../api/Auth'
import { useNavigate } from 'react-router-dom'



export default function Register() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
        username:'',
        email: '',
        password: ''
    },
    validationSchema: Yup.object({
        username: Yup.string()
        .required('Your username is required')
        .min(3, 'username trop court'),
        email: Yup.string()
            .required('Your email is required')
            .email('Your email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'password trop court')
            .max(30),
    }),
    onSubmit: (values) => {
          signup(values)
          navigate('/Login')
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
                    type="text"
                    name="username"
                    placeholder="Username"
                    handleChange={formik.handleChange}
                    error={formik.errors.username}
                />
            <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    handleChange={formik.handleChange}
                    error={formik.errors.email}
                />
            <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    handleChange={formik.handleChange}
                    error={formik.errors.password}
                />
              <Grid item>
                <Link to={"/Login"} variant="body2">
                  {"Vous avez déjà un compte? Connectez-vous"}
                </Link>
              </Grid>
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