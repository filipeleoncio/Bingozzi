import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Cartela } from '../Cartela';
import { useStyles } from './styles';

export function PaginaInicial() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                <Typography className={classes.pageTitle}>BINGOZZI</Typography>
                <Cartela />
            </Grid>
            <Grid item xs={2} />
        </Grid>
    );
}
