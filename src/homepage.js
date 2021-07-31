import React, { useState } from "react";
import logo from "./logo.png";
import HomeBar from "./homebar"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

function homepage(props) {

    return (
        <div>
            <HomeBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="What is your name?(2-25 characters)" variant="outlined" />
                </form>
                <Typography display="block"> My text will be on the next line </Typography>
                <Button variant="contained" color="primary" onClick={() => { alert('clicked')}}>
                    Next
                </Button>
            </header>
</div>

    )
}

export default homepage;