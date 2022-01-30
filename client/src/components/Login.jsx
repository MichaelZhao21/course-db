import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Logo from './logo';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visibility, setVisibility] = useState(0);

    const tryLogin = () => {
        console.log(username, password);
        if (username === 'johndoe' && password === 'password') {
            navigate('/');
        }
    };

    const handleClickShowPassword = () => {
        setVisibility(!visibility);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Logo sx={{ width: '10%', height: '10%', margin: '7.5% auto auto auto' }} />
                <Typography variant="h2" sx={{ margin: '5% auto auto auto' }}>
                    Login to courseDB
                </Typography>
                <TextField
                    id="usernameField"
                    label="Username"
                    variant="standard"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    sx={{ margin: '5% auto auto auto', width: '300px' }}
                />

                <FormControl sx={{ m: 1, width: '300px', marginTop: '24px' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={visibility ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {!visibility ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        />
                </FormControl>

                <Button variant="text" onClick={tryLogin} sx={{ margin: '2.5% auto auto auto' }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
}
