import { Container, Box, List, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from './logo';

export default function Course() {

    https://us-central1-course-db-22.cloudfunctions.net/app

    const [name, setName] = () => useState('');
    const [prof, setProf] = () => useState('');

    useEffect(() => {
        (async () => {
            const courseRes = await fetch(
                'https://us-central1-course-db-22.cloudfunctions.net/app/courses'
                ).then((data) => data.json());
                setName(courseRes.name);
                setProf(courseRes.professor);
        })();
    }, []);

    return(
        <Container>

            // Header
            <Box sx={{display:"flex", width="100vw", height="12vh"}}>
                <Logo/>
                // Course name
                <Typography variant="h2" sx={{}}> {name} </Typography>
                // Course professor
                <Typography variant="h3" sx={{}}> {prof} </Typography>
            </Box>

            // Navbar
            <Box sx={{display:"flex", width="100vw", height="12vh"}}>
                <Button variant="text">Todo</Button>
                <Button variant="text">Lectures</Button>
                <Button variant="text">Notes</Button>
                <Button variant="text">Homework</Button>
            </Box>
            
            // List
            <Box>

            </Box>

            // Action buttons
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                >
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Container>
    )
}