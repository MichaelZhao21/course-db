import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Logo from './logo';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const tryLogin = () => {
        console.log(username, password);
        if (username === 'johndoe' && password === 'password') {
            navigate('/');
        }
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
                <TextField
                    id="passwordField"
                    label="Password"
                    variant="standard"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    sx={{ width: '300px', marginTop: '24px' }}
                />
                <Button variant="text" onClick={tryLogin} sx={{ margin: '2.5% auto auto auto' }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
}
