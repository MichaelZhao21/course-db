import { Container, Box, List, Typography, ListItem, IconButton, alpha } from '@mui/material';
import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';
import dayjs from 'dayjs';

export default function Todo({ todo }) {
    const [icon, setIcon] = useState(<CheckBoxOutlineBlankIcon />);

    const finishItem = async () => {
        const res = await fetch(`https://us-central1-course-db-22.cloudfunctions.net/app/todos/${todo.id}`, {
            method: 'DELETE',
        });
        console.log(res);
        window.location.reload();
    };

    const dueColor = todo.dueIn < 3 ? '#F46060' : todo.dueIn < 6 ? '#EBCE82' : '#6FCC66';

    return (
        <ListItem
            sx={{
                display: 'flex',
                width: '100%',
                flexGrow: 1,
                alignItems: 'center',
                // borderRight: (theme) => `solid 5px ${theme.palette.secondary.main}`,
                marginBottom: '1rem',
                padding: '1rem',
            }}
            secondaryAction={
                <IconButton
                    color="secondary"
                    edge="end"
                    aria-label="check"
                    onClick={finishItem}
                    onMouseEnter={() => {
                        setIcon(<CheckBoxIcon />);
                    }}
                    onMouseLeave={() => {
                        setIcon(<CheckBoxOutlineBlankIcon />);
                    }}
                >
                    {icon}
                </IconButton>
            }
        >
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '60px', marginRight: '2rem' }}>
                <Typography variant="h4" sx={{ fontSize: 60, color: dueColor }}>
                    {todo.dueIn}
                </Typography>
                <Typography sx={{ color: dueColor, marginTop: '-15px' }}>DAYS</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                <Typography variant="h4">{todo.name}</Typography>
                <Typography sx={{ color: (theme) => theme.palette.grey[600], fontSize: '20px' }}>{`Due: ${dayjs(
                    todo.dateTime
                ).format('ddd D, YYYY')}`}</Typography>
            </Box>
        </ListItem>
    );
}
