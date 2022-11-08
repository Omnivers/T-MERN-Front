import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

function Home() {
    return ( 
      <ThemeProvider theme={theme}>
      <Container>
      <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            />
        <Typography variant="h1" align="center" color='white'>Items that fit for you</Typography>
        <Typography variant="h3" align="center" color="white" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam
          iure magnam nobis totam nulla dolor inventore amet, repellendus dolores
          commodi. Quasi earum odit aspernatur, voluptatem consequuntur eum ullam
          mollitia.
        </Typography>
      <Stack
        align="center"
        maxWidth="sm"
        justifyContent="end"
        direction="row"
      >
        <Button  variant="outlined" size="large" sx={{color:"#FFFFFF", border:"2px white solid", "&:hover":{color:'black',borderColor:'black'}}}>Start Now</Button>
      </Stack>
      </Container>
      </ThemeProvider>
    );
  }
  
  export default Home;
  