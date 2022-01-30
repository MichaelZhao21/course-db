import { Container, Box, List, Typography, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FileDisplay from './FileDisplay';
import Logo from './logo';

export default function Homework() {

    return(
        <Grid container spacing={2} sx={{width:"100%"}}>
            <Grid item>
                <FileDisplay ext="pdf" name="HW1 - CS 3345" />
            </Grid>
            <Grid item>
                <FileDisplay ext="pdf" name="HW2 - CS 3345" />
            </Grid>
            <Grid item>
                <FileDisplay ext="pdf" name="HW3 - CS 3345" />
            </Grid>
            <Grid item>
                <FileDisplay ext="vid" name="Group Project 1 - CS 3345" />
            </Grid>
            <Grid item>
                <FileDisplay ext="pdf" name="HW4 - CS 3345" />
            </Grid>
        </Grid>
    )
}