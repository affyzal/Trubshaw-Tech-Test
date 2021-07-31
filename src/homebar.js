import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid} from "@material-ui/core";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default function ButtonAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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