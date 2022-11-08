import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Assets/Input/Input';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/Auth';
import { UserContext } from '../contexts/User'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { setToken } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
        onSubmit: async (values) => {
            // const { token } = await login(values)
            // setToken(token)
            // if (token) {
            //     navigate('/Products')
            // }
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
            Login
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
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
                <Link to={"/Register"} variant="body2">
                  {"Vous n'avez pas de compte? Inscrivez-vous"}
                </Link>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    )
}
export default Login