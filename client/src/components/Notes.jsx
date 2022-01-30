import { Grid } from '@mui/material';
import React from 'react';
import FileDisplay from './FileDisplay';

export default function Notes() {

    return(
        <Grid container spacing={2} sx={{width:"100%", marginTop: "2%"}}>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH1 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH2 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="Pipes" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="Project Tips"/>
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH3 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH4 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH5 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="Intro to Github" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH6 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="Exam Review" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH7 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH8 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH9 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH10 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="CH11 - CS 3345" />
            </Grid>
            <Grid item xs={2}>
                <FileDisplay ext="pdf" name="Cloud Computing - CS 3345" />
            </Grid>
        </Grid>
    )
}