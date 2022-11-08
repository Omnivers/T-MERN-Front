import TextField from '@mui/material/TextField';

const Input = ({ handleChange, type, name, value, placeholder, error }) => {
    return (
        <div className="pt-10">
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
            {error && <p className="error-text">{error}</p>}
        </div>
    );
};

export default Input;
