import React from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import { Box, Typography } from '@mui/material';

// ext: (pdf, img, vid, ppt) File extension to use -> determines picture displayed
// name: (string) Name of the file
// url: (string) URL to download file
const FileDisplay = (props) => {
    let icon = <DescriptionOutlinedIcon sx={{ fontSize: '60px' }} />;
    if (props.ext === 'img') icon = <ImageOutlinedIcon sx={{ fontSize: '60px' }} />;
    else if (props.ext === 'vid') icon = <OndemandVideoOutlinedIcon sx={{ fontSize: '60px' }} />;
    else if (props.ext === 'ppt') icon = <WebAssetOutlinedIcon sx={{ fontSize: '60px' }} />;

    return (
        <a href={props.url} target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {icon}
                <Typography sx={{ fontSize: '12px', marginTop: 1 }}>{props.name}</Typography>
            </Box>
        </a>
    );
};

export default FileDisplay;
