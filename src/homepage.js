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
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const risks = [
    {
        value: 'low',
        label: 'Low Risk',
    },
    {
        value: 'medium',
        label: 'Medium Risk',
    },
    {
        value: 'high',
        label: 'High Risk',
    },
];

function initialQuestion(){
    console.log('run function')
    return "What is your name?(2-25 characters)"
}

function initialTxtfield(){
    return "outlined"
}

function initialRisk(){
    return "low"
}

function initialQuestion3(){
    return false
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Homepage() {
    const classes = useStyles();

    const [question, setQuestion] = useState(() => initialQuestion())
    const [txtfieldvariant, setTxtfieldvaraint] = useState(() => initialTxtfield())
    const [question3, setQuestion3] = useState(() => initialQuestion3())
    const [risk, setRisk] = useState(() => initialRisk())
    const [name, setName] = React.useState('Enter');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleRisk = (event) => {
        setRisk(event.target.value);
    };

    let TxtField;

    if (question3) {
        TxtField = <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={risk}
            onChange={handleRisk}
            helperText="What level of threat are you reporting?"
            variant="outlined"
        >
            {risks.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>;
    } else {
        TxtField = <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">{question}</InputLabel>
            <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
        </FormControl>
    }

    function nextQuestion() {
        if (question == ("What is your name?(2-25 characters)")) {
            setQuestion("What is your email?")

        }
        else if (question == ("What is your email?")) {
            setQuestion("What level of threat are you recording?")
            setQuestion3(true)
        }
        else if (question == ("What level of threat are you recording?")) {
            setQuestion("What is your name?(2-25 characters)")
            setQuestion3(false)
        }
    }
    return (
        <div>
            <HomeBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <form inputnoValidate autoComplete="off">
                    {TxtField}
                </form>
                <Typography display="block"> My button will be on the next line </Typography>
                <Button variant="contained" color="primary" onClick={nextQuestion}>
                    Next
                </Button>
            </header>
        </div>


    )
}

export default Homepage;