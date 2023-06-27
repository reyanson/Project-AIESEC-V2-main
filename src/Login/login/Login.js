import * as React from 'react';
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
//import {useParas} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinkMui from '@mui/material/Link';
import Logo from "./Logo.png";
//import OutlinedInput from '@mui/material/OutlinedInput';
//import InputLabel from '@mui/material/InputLabel';
import { IconButton, InputAdornment, FormControl } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


// function Copyright(props) {

//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  async function login(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8080/member/login", {
          email: email,
          password: password,

          }).then((res) =>{
           console.log(res.data);
          
           if (res.data.message === "Email not exits"){
             alert("Email not exits");
           }else if(res.data.message === "Login Success"){ 
             
               navigate('/home');
              console.log("succ");
           }else{
              alert("Incorrect Email and Password not match");
           }

          }, fail => {
         console.error(fail); // Error!

          });
      }

       catch (err) {
        alert(err);
      }
    
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
 // };

  return (
    <ThemeProvider theme={theme}>

       <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar alt="Aiesec-image" src={Logo} variant="square" sx={{ width: 180 ,height:80}}  />
          
          <Typography  component="h4" variant="h5"  sx={{ mt:'10px'}}>
            Sign in to your Account
          </Typography>
          <Typography  color={'GrayText'}  fontSize={"13px"}  >
            Welcome back! please enter your details
          </Typography>
          
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event)=>{
                setEmail(event.target.value);
              }}
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
            /> */}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Grid container >
            <Grid item xs >
             
              {/* <Link to={`/forgot`} >Forgot password?</Link> */}
             
                <LinkMui to variant="body2"  display="flex" justifyContent="flex-end" sx={{ mt: '-30px' }} > 
                <Link to={`/forgot`} >Forgot password?</Link>
                </LinkMui>
              </Grid>
            </Grid>
  

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}

            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item >
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}