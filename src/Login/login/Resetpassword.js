import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useParas} from 'react-router-dom';
import LinkMui from '@mui/material/Link';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {  useState } from "react";

import UpHeader from "./UpHeader";

const theme = createTheme();

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function go(event) {
      event.preventDefault();
      navigate('/home');
        
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_vg3uiwv', form.current, 'U0_D3jXnbM1yPEax-')
      .then((result) => {
        
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
    );
    e.target.reset();
    navigate('/VerifyEmail');
  };

  //new service_6s04l9o
  
  return (
    <>
    <Grid container  ml={1} >
          
           <Grid item xs={12}>
              <UpHeader />
           </Grid>

    <Grid item xs={12}></Grid>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={ {border: 'none', borderRadius: '5%', borderColor: 'grey.500',boxShadow: 1,  marginTop:'60px'}} >
        
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
            Reset Your Password
          </Typography>
          <Typography  color={'GrayText'}  fontSize={"13px"}  >
            Enter the email address associated with your account and <br/>we will send you a link to reset your password.
          </Typography>


          <Box component="form" ref={form} onSubmit={sendEmail} noValidate sx={{ mt: 1 }}>

            <TextField
            required
              margin="normal"
              
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              //autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{ mt: 3, mb: 2 ,padding: 2, borderRadius:"12px"}}
            >
               Confirm             
            </Button>
           
            <Grid container >
            <Grid item xs >
             
                <LinkMui to variant="body3"  display="center" justifyContent="flex-center" > 
                <Link to={`/`} >Back to Sign in</Link> <br/> <br/><br/>
                </LinkMui>
              </Grid>
            </Grid>
          
          </Box>
        </Box>
  
      </Container>
    </ThemeProvider>
    </Grid>
    
    </>
  );
}