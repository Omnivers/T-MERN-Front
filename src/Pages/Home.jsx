import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link} from 'react-router-dom';

// Homepage
function Home() {
    return ( 
      <Box sx={{ mt: 15 }}>
      <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            />
        <Typography variant="h1" align="center" sx={{ m: 5}} color='white'>Items that fit for you</Typography>
        <Typography variant="h3" align="center" sx={{ m: 5}} color="white" paragraph>
           Consultez vos produits, modifiez les, supprimez-les ou créez-en de nouveaux sur LBA(Les Bons Artisans test-technique). Naviguez dans les produits déjà existants ou bien créez un compte pour poster vos propre produits en ligne !
        </Typography>
      <Stack
        direction='row'
        justifyContent='center'     
      >
        <Link to={`/Register`} style={{ textDecoration: 'none' }}><Button variant="contained" size="large" sx={{p:5, color:"#FFFFFF", border:"2px white solid", "&:hover":{borderColor:'black'}}}>Start Now</Button></Link>
      </Stack>
      </Box>
    );
  }
  
  export default Home;
  