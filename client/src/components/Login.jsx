import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Logo from './logo';
import { TextField, Button } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
 
export default function Login(){
 
    const [username, setUsername] = useState("");
    const updateUsername = (input) => setUsername(input)
    password = "";
    const tryLogin = (username, password) => {
        if(getField(username) == "johnDoe" && getField(password) == "password"){
            this.props.history.push('/');
        }
    };
 
    return(
        <Container>
            <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                <Logo sx={{width: "10%", height: "10%", margin: "7.5% auto auto auto"}}/>
                <Typography variant="h2" sx={{margin:"5% auto auto auto"}}>Login to courseDB</Typography>
                <TextField id="usernameField" label="Username" variant="standard" onChange={updateUsername()} sx={{margin:"5% auto auto auto"}}/>
                <TextField id="passwordField" label="Password" variant="standard" onChange={} />
                <Button variant="text" onClick={tryLogin(usernameField, passwordField)} sx={{margin:"2.5% auto auto auto"}}>Submit</Button>
            </Box>
        </Container>
    );
}
