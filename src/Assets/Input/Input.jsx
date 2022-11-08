import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Input = ({ handleChange, type, name, value, placeholder, error }) => {
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                label={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
            {error &&<Typography
              variant="h8"
              color="red"
              gutterBottom
            > {error} </Typography>}
        </>
    );
};

export default Input;
