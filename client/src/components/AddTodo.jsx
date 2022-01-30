import React, { useEffect, useState } from 'react';
import {
    Box,
    Link,
    List,
    Typography,
    Container,
    Card,
    CardContent,
    Paper,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Logo from './logo';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';

const AddTodo = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('none');
    const [due, setDue] = useState(dayjs().valueOf());
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const submit = async () => {
        await fetch('https://us-central1-course-db-22.cloudfunctions.net/app/todos', {
            method: 'POST',
            body: JSON.stringify({ name, courseId: course, dateTime: due.valueOf() }),
            headers: { 'Content-Type': 'application/json' },
        });
        navigate('/');
    };

    // Retrieve courses
    useEffect(() => {
        (async () => {
            const courseRes = await fetch(
                'https://us-central1-course-db-22.cloudfunctions.net/app/courses'
            ).then((data) => data.json());
            setCourses(courseRes.sort((a, b) => a.name - b.name));
        })();
    });

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 16,
            }}
        >
            <Logo sx={{ fontSize: 100 }} />

            <Typography variant="h2" sx={{ fontWeight: 100, my: 6 }}>
                Add Todo
            </Typography>
            <TextField
                id="name"
                label="Todo Name"
                variant="standard"
                onChange={(e) => {
                    setName(e.target.value);
                }}
                sx={{ my: 2, width: 400, marginBottom: 4 }}
            />
            <FormControl sx={{ marginBottom: 4 }}>
                <InputLabel id="course-label">Course</InputLabel>
                <Select
                    labelId="course-label"
                    id="course"
                    value={course}
                    label="Course"
                    onChange={(e) => {
                        setCourse(e.target.value);
                    }}
                    variant="standard"
                >
                    <MenuItem value="none" selected>
                        None
                    </MenuItem>
                    {courses.map((c) => (
                        <MenuItem value={c.id}>{c.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} variant="standard" />}
                label="Due date"
                value={due}
                onChange={(val) => {
                    setDue(val);
                }}
            ></DateTimePicker>
            <Box sx={{ display: 'flex', marginTop: 6 }}>
                <Button variant="text" color="error" size="small" sx={{ marginRight: 4 }}>
                    Cancel
                </Button>
                <Button color="success" variant="contained" size="large" onClick={submit}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default AddTodo;
