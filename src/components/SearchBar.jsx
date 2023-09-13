import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function SearchBar ({onSubmit}) {
    const [searchitem, setSearchItem] = useState("");

    const handlechange = (event) => {
        setSearchItem(event.target.value)
    };
    
    const handlekeypress = (event) => {
        if (event.key = "Enter"){
            onSubmit(searchitem)
        }
    };

    return (
        <>
        <Paper elevation={6} style={{padding:"15px"}}>
            <TextField 
            fullWidth
            label= "...search"
            value={searchitem}
            onChange={handlechange}
            onKeyPress={handlekeypress}
            />
        </Paper>
        </>
    )
}

export default SearchBar;