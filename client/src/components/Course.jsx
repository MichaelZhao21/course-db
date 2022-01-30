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
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useHistory, useParams } from 'react-router-dom'

export default function Course() {

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    const { id } = useParams();

    const [name, setName] = useState('test');
    const [prof, setProf] = useState('test');

    useEffect(() => {
        (async () => {
            const courseRes = await fetch(
                `https://us-central1-course-db-22.cloudfunctions.net/app/courses/${id}`
                ).then((data) => data.json());
                setName(courseRes.name);
                setProf(courseRes.professor);
                console.log("hello");
                console.log(this.props.location);
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
                        <Button variant="text" sx={{width: "300px"}}>Todo</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="text" sx={{width: "300px"}}>Lectures</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="text" sx={{width: "300px"}}>Notes</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="text" sx={{width: "300px"}}>Homework</Button>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{marginTop:"-4%"}}/>

            <Box>

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