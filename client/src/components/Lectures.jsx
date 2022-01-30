import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FileDD from './FileDD';
import FileDisplay from './FileDisplay';

const file1 = {
    name: 'CS-4337_ch03',
    url: 'https://firebasestorage.googleapis.com/v0/b/course-db-22.appspot.com/o/CS-4337_ch03%20Describing%20Syntax%20and%20Semantics.pdf?alt=media',
    ext: 'pdf',
};
const file2 = {
    name: 'inode_structure',
    url: 'https://firebasestorage.googleapis.com/v0/b/course-db-22.appspot.com/o/inode_structure.pdf?alt=media',
    ext: 'pdf',
};
const file3 = {
    name: 'lecture-1-15-22',
    url: 'https://firebasestorage.googleapis.com/v0/b/course-db-22.appspot.com/o/lecture-1-15-22.pdf?alt=media',
    ext: 'pdf',
};

export default function Lectures() {
    const [fileCompList, setFileCompList] = useState([]);
    const [actualFileList, setActualFileList] = useState([]);

    useEffect(() => {
        if (fileCompList.length === 0) return;
        // window.location.reload();
    }, [fileCompList]);

    useEffect(() => {
        (async () => {
            const fileList = await fetch(
                'https://us-central1-course-db-22.cloudfunctions.net/app/f'
            ).then((data) => data.json());
            const ids = fileList.map((f) => Number(f.id));
            const l = [];
            if (ids.includes(1)) l.push(file1);
            if (ids.includes(2)) l.push(file2);
            if (ids.includes(3)) l.push(file3);
            setActualFileList(
                l.map((i) => (
                    <Grid item xs={2}>
                        <FileDisplay name={i.name} url={i.url} ext={i.ext} />
                    </Grid>
                ))
            );
        })();
    }, [fileCompList]);

    return (
        <React.Fragment>
            <FileDD setComponentList={setFileCompList} />
            <Grid container spacing={2} sx={{ width: '100%', marginTop: '2%' }}>
                {actualFileList}
            </Grid>
        </React.Fragment>
    );
}
