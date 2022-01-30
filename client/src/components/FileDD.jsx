import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FileDisplay from './FileDisplay';
import { uploadImage } from '../firebase';
import { useDropzone } from 'react-dropzone';

// Pass in setComponentList
const FileDD = (props) => {
    const [fileList, setFileList] = useState([]);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    useEffect(() => {
        (async () => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const fil = acceptedFiles[0].name;
                
                let id = 0;
                if (fil === 'CS-4337_ch03 Describing Syntax and Semantics.pdf') id = 1;
                else if (fil === 'inode_structure.pdf') id = 2;
                else if (fil === 'lecture-1-15-22.pdf') id = 3;

                if (id !== 0) await fetch(`https://us-central1-course-db-22.cloudfunctions.net/app/f/${id}`, { method: 'POST' });
                // uploadImage(acceptedFiles);
            }

            const nfl = [...fileList, ...acceptedFiles];

            setFileList(nfl);
            props.setComponentList(
                nfl.map((f) => (
                    <Grid item xs={2}>
                        <FileDisplay ext="pdf" name={f.name} url={f.path} />
                    </Grid>
                ))
            );
        })();
    }, [acceptedFiles]);

    return (
        <Box>
            <Box
                {...getRootProps({ className: 'dropzone' })}
                sx={{ marginTop: 2, height: '10vh', border: '2px dotted #aaa' }}
            >
                <input {...getInputProps()} />
                <Typography sx={{ textAlign: 'center', color: '#aaa', paddingTop: 2 }}>
                    Drag n' Drop anywhere here to add files!
                </Typography>
            </Box>
        </Box>
    );
};

export default FileDD;
