import { Container, Box, List, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from './logo';

export default function Notes() {

    // Fetch data from backend on load
    useEffect(() => {
        (async () => {
            const courseRes = await fetch(
                'https://us-central1-course-db-22.cloudfunctions.net/app/courses'
            ).then((data) => data.json());
            console.log(setCourses)
            setCourses(courseRes);
        })();
    }, []);

    return(
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexBasis: '50%', marginLeft: '5%' }}>
                <List sx={{ px: 8 }}>
                    {courses.map((c) => (
                        <CourseListEntry course={c} />
                    ))}
                </List>
            </Box>
        </Box> 
    )
}