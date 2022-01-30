import { Box, List, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseListEntry from './CourseListEntry';
import Logo from './logo';
import Todo from './TodoList';

export default function Home() {
    const [courses, setCourses] = useState([]);
    const [todos, setTodos] = useState([]);

    // Fetch data from backend on load
    useEffect(() => {
        (async () => {
            const courseRes = await fetch(
                'https://us-central1-course-db-22.cloudfunctions.net/app/courses'
            ).then((data) => data.json());
            setCourses(courseRes);

            const todoRes = await fetch(
                'https://us-central1-course-db-22.cloudfunctions.net/app/todos'
            ).then((data) => data.json());
            setTodos(todoRes.sort((a, b) => a.dateTime - b.dateTime));
        })();
    }, []);

    return (
        <Box sx={{ mx: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                <Typography variant="h2">Todo List</Typography>
                <Logo fontSize="120px" sx={{ mx: 30 }} />
                <Typography variant="h2">Courses</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexBasis: '50%', marginRight: '5%' }}>
                    <List sx={{ px: 8 }}>
                        {todos.map((t) => (
                            <Todo todo={t} />
                        ))}
                    </List>
                </Box>
                <Box sx={{ flexBasis: '50%', marginLeft: '5%' }}>
                    <List sx={{ px: 8 }}>
                        {courses.map((c) => (
                            <CourseListEntry course={c} />
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
}
