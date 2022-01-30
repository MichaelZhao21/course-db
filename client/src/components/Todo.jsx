import { Box, List } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import TodoList from './TodoList';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    // Fetch data from backend on load
    useEffect(() => {
        (async () => {
            const todoRes = await fetch(
                'https://us-central1-course-db-22.cloudfunctions.net/app/todos'
            ).then((data) => data.json());
            setTodos(
                todoRes
                    .sort((a, b) => a.dateTime - b.dateTime)
                    .filter((t) => window.location.pathname.indexOf(t.courseId) !== -1)
            );
        })();
    }, []);

    return (
        <List sx={{ px: 8 }}>
            {todos.map((t) => (
                <TodoList todo={t} />
            ))}
        </List>
    );
};

export default Todo;
