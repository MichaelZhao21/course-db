import React, { useState } from 'react';
import {
    Box,
    Link,
    List,
    Typography,
    Container,
    Card,
    CardContent,
    Paper,
    TextField,
    Button,
} from '@mui/material';
import Logo from './logo';
import { useNavigate } from 'react-router';

const AddCourse = () => {
    const [name, setName] = useState('');
    const [prof, setProf] = useState('');
    const navigate = useNavigate();
    const submit = async () => {
        await fetch('https://us-central1-course-db-22.cloudfunctions.net/app/courses', {
            method: 'POST',
            body: JSON.stringify({ name, professor: prof }),
            headers: { 'Content-Type': 'application/json' },
        });
        navigate('/');
    };
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 16,
            }}
        >
            <Logo sx={{ fontSize: 100 }} />

            <Typography variant="h2" sx={{ fontWeight: 100, my: 6 }}>
                Add Course
            </Typography>
            <TextField
                id="name"
                label="Course Name"
                variant="standard"
                onChange={(e) => {
                    setName(e.target.value);
                }}
                sx={{ my: 2, width: 500 }}
            />
            <TextField
                id="prof"
                label="Professor/Instructor"
                variant="standard"
                onChange={(e) => {
                    setProf(e.target.value);
                }}
                sx={{ my: 2, width: 500 }}
            />
            <Box sx={{ display: 'flex', marginTop: 6 }}>
                <Button variant="text" color="error" size="small" sx={{ marginRight: 4 }}>
                    Cancel
                </Button>
                <Button color="success" variant="contained" size="large" onClick={submit}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default AddCourse;
