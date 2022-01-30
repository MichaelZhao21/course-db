import { Container, Box, List, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from './logo';
import Button from '@mui/material/Button';
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
            <Logo sx={{position: "absolute", top: 10, left: 10}}/>
            <Box sx={{display:"flex", flexDirection: "column", height:"12vh", margin: "4% auto auto auto"}}>
                
                <Typography variant="h3" sx={{}}> {name} </Typography>
                <Typography variant="h4" sx={{}}> {prof} </Typography>
            </Box>

            <Box sx={{display:"flex", width: "100%", height:"12vh"}}>
                <Button variant="text" sx={{width: "30px"}}>Todo</Button>
                <Button variant="text" sx={{width: "30px"}}>Lectures</Button>
                <Button variant="text" sx={{width: "30px"}}>Notes</Button>
                <Button variant="text" sx={{width: "30px"}}>Homework</Button>
            </Box>
            
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