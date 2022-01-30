import { Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import FileDD from './FileDD';

export default function Lectures() {
    const [fileCompList, setFileCompList] = useState([]);

    return (
        <React.Fragment>
            <FileDD setComponentList={setFileCompList} />
            <Grid container spacing={2} sx={{ width: '100%', marginTop: '2%' }}>
                {fileCompList}
            </Grid>
        </React.Fragment>
    );
}
