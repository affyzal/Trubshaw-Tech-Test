import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Grid} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

export default function ButtonAppBar() {
    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <div>
                        <IconButton>
                            <HomeIcon fontSize="large" />
                        </IconButton>
                    </div>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="flex-start">
                        <Typography variant="h6" >
                            Trubshaw Cumberledge Coding Test
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}