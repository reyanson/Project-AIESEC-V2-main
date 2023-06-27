
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import EmailLogo from "./Email.png"
import UpHeader from "./UpHeader";


const theme = createTheme();

export default function VerifyEmail() {

  return (
    <>
    <Grid container  ml={1}>
          
           <Grid item xs={12}>
              <UpHeader />
           </Grid>

      <Grid item xs={12}>
      <ThemeProvider theme={theme}>
      <Container  component="main" maxWidth="xs" sx={ {height:'250px' ,border: 'none', borderRadius: '5%', borderColor: 'grey.500',boxShadow: 1, marginTop:'50px'}} >
       
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar alt="EmailIcon" src={EmailLogo} variant="square" sx={{ width: 80 ,height:70, mt:4}} />

          <Typography  component="h4" variant="h5"  sx={{ mt:'10px'}}>
            Verify Your Email 
          </Typography><br/>
          <Typography  color={'GrayText'}  fontSize={"13px"}  >
            Thank you, check your email for instructions <br/> to reset your password<br/>
            <br/>
          </Typography> 
          
          {/* <Box component="form" noValidate sx={{ mt: 1 }}>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2.5, mb: 2, width:250 }}
              //onClick={login}
            >
              Skip Now
            </Button>
            
            <Grid item >
                <Link href="#" variant="body2">
                  {"Don't receive an email? Resend"} <br/> <br/>
                </Link>
            </Grid>
            
        </Box> */}
        </Box> 
        
      </Container>
    </ThemeProvider>
    </Grid>

  </Grid>
    
    </>
  );
}