import { Container, Box, List, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from './logo';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import { useHistory, useParams } from 'react-router-dom';

import Todo from "./Todo.jsx";
import Lectures from "./Lectures.jsx";
import Notes from "./Notes.jsx";
import Homework from "./Homework.jsx";

export default function Course() {

    const actions = [
        { icon: <SaveIcon />, name: 'Upload' },
    ];

    const { id } = useParams();

    const [name, setName] = useState('test');
    const [prof, setProf] = useState('test');

    const [section, setSection] = useState(<Todo/>);
    const pickSection = (choice) => setSection(choice);

    useEffect(() => {
        (async () => {
            const courseRes = await fetch(
                `https://us-central1-course-db-22.cloudfunctions.net/app/courses/${id}`
                ).then((data) => data.json());
                setName(courseRes.name);
                setProf(courseRes.professor);
        })();
    }, []);

    return(
        <Container>
            <Box sx={{display:"flex", flexDirection: "row", height:"9vh", marginTop: "4%"}}>
                    <Logo sx={{marginRight: "4% ", fontSize:"75px"}}/>
                <Box sx={{display:"flex", flexDirection: "column"}}>
                    <Typography variant="h3" sx={{fontSize: "210%"}}> {name} </Typography>
                    <Typography variant="h2" sx={{fontSize: "190%", marginTop: "1%"}}> {prof} </Typography>
                </Box>
            </Box>

            <Box sx={{display:"flex", width: "100%", height:"12vh", marginTop: "4%"}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Button variant="text" onClick={pickSection.bind(this, <Todo/>)} sx={{width: "300px"}}>Todo</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="text" onClick={pickSection.bind(this, <Lectures/>)} sx={{width: "300px"}}>Lectures</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="text" onClick={pickSection.bind(this, <Notes/>)} sx={{width: "300px"}}>Notes</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="text" onClick={pickSection.bind(this, <Homework/>)} sx={{width: "300px"}}>Homework</Button>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{marginTop:"-4%"}}/>

            <Box sx={{width:"100%"}}>
                {section}
            </Box>

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