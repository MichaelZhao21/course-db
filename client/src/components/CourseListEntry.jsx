import { ListItem, Typography, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseListEntry = ({ course }) => {
    const navigate = useNavigate();
    const goToCourse = () => {
        navigate(`/course/${course.id}`);
    };
    return (
        <ListItem
            sx={{
                display: 'flex',
                width: '100%',
                flexGrow: 1,
                alignItems: 'flex-start',
                borderLeft: (theme) => `solid 5px ${theme.palette.primary.main}`,
                marginBottom: '2rem',
                padding: '0.5rem',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                    backgroundColor: '#373737',
                },
            }}
            onClick={goToCourse}
        >
            <Box
                sx={{
                    height: '100%',
                    width: '5px',
                }}
            ></Box>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
                {course.name}
            </Typography>
            <Typography
                sx={{
                    color: (theme) => theme.palette.grey[400],
                    textAlign: 'right',
                    width: 300,
                    flexShrink: 1,
                    fontSize: '24px',
                }}
            >
                {course.professor}
            </Typography>
        </ListItem>
    );
};

export default CourseListEntry;
