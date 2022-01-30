import { Grid } from '@mui/material';
import React, { useState } from 'react';
import FileDD from './FileDD';
import FileDisplay from './FileDisplay';

export default function Homework() {
    const [fileCompList, setFileCompList] = useState([]);

    return (
        <React.Fragment>
            <FileDD setComponentList={setFileCompList} />
            <Grid container spacing={2} sx={{ width: '100%', marginTop: '2%' }}>
                <Grid item xs={2}>
                    <FileDisplay ext="pdf" name="HW1 - CS 3345" />
                </Grid>
                <Grid item xs={2}>
                    <FileDisplay ext="pdf" name="HW2 - CS 3345" />
                </Grid>
                <Grid item xs={2}>
                    <FileDisplay ext="pdf" name="HW3 - CS 3345" />
                </Grid>
                <Grid item xs={2}>
                    <FileDisplay ext="vid" name="Group Project 1 - CS 3345" />
                </Grid>
                <Grid item xs={2}>
                    <FileDisplay ext="pdf" name="HW4 - CS 3345" />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
