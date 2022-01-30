import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Logo from './logo';

export default function Login(){
    return(
        <Container>
            <Box sx={{ display: 'block',
                        backgroundColor: theme => theme.palette.primary.main, 
                        width: "50vw",
                        height: "75vh",
                        borderRadius: "30px"
                        }}>
                <Container sx={{ display: "flex",
                        flexDirection: "column"    
                        }}>
                    <Logo/>
                    <Typography variant="h1">courseDB</Typography>
                    
                </Container>
            </Box>
        </Container>
    );
}