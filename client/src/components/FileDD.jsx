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
        console.log(acceptedFiles);

        if (acceptedFiles && acceptedFiles.length > 0) {
            uploadImage(acceptedFiles);
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
    }, [acceptedFiles]);

    return (
        <Box>
            <Box
                {...getRootProps({ className: 'dropzone' })}
                sx={{ marginTop: 2, height: '20vh', border: '2px dotted #aaa' }}
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
