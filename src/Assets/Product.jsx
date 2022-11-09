import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import {deleteProduct,} from '../api/Products';
import { useState } from 'react';
import Edit from '../Pages/Edit';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
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

export default function ComplexGrid({id,title,desc,img,price,ava,garantie,rating,fetchProduct}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
  const Delete = async (id) => {
    const request = await deleteProduct(id)
     fetchProduct();
  }
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        mt:2,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={title} src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {desc}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Availability : {ava.toString()}
              </Typography>
            </Grid>
            <Grid sx={{m:2}}>
              <Button onClick={()=>{Delete(id)}} variant="outlined" color="error">
                Remove
              </Button>
              <Button onClick={handleOpen} variant="outlined" sx={{color:"black",border:"1px solid black", "&:hover":"black"}}>
                <EditIcon />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              ><Edit id={id} /></Modal>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {price}$
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}