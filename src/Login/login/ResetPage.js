import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {  useState } from "react";

import UpHeader from "./UpHeader";

const theme = createTheme();

export default function ResetPage() {
  

 
  
  return (
    <>
    <Grid container  ml={1} >
          
           <Grid item xs={12}>
              <UpHeader />
           </Grid>

    <Grid item xs={12}></Grid>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderColor: 'grey.500'
          }}
        >
          
          <Typography color={'#161E2F'}  component="h4" variant="h5"  sx={{ mt:'-20px'}}>
            Reset Account Password
          </Typography>
          <Typography  color={'GrayText'}  fontSize={"13px"}  >
            Enter your new password
          </Typography>


          <Box component="form" noValidate sx={{ mt: 1 }}>

            <TextField
              required
              margin="normal"             
              fullWidth
              id="npass"
              label="Password"
              name="npass"
              //autoFocus
            />

            <TextField
              required
              margin="normal"             
              fullWidth
              id="cpass"
              label="Confirm Password"
              name="cpass"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"             
              sx={{ mt: 3, mb: 2 ,padding: 1, borderRadius:"5px"}}
            >
               Reset Password             
            </Button>
         
          </Box>
        </Box>
  
      </Container>
    </ThemeProvider>
    </Grid>
    
    </>
  );
}