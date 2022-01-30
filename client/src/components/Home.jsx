import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Logo from './logo';

export default function Home(){
    return(
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h2" sx={{ flexBasis: 1, flexShrink: 0, flexGrow: 1 }}>Todo List</Typography>
                <Logo fontSize="80px" sx={{ flexBasis: 1, flexShrink: 0, flexGrow: 1 }} />
                <Typography variant="h2" sx={{ flexBasis: 1, flexShrink: 0, flexGrow: 1 }}>Courses</Typography>
            </Box>
        </Container>
    );
}