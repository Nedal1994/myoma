import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

function SignUp() 
{
  const history = useNavigate()

  const [inputs, setInputs] = useState({
    username:'',
    email:'',
    password:''
  })


  const handleChange = (e) =>{
    setInputs(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    })
    )
  }


  const sendRequest = async () =>{
    const res = axios.post('http://localhost:4000/api/register',{
      username: inputs.username,
      email: inputs.email,
      password: inputs.password
    })
    .catch(err => console.log(err))

    const data = await res.data

    return data
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    // Send HTTP Request
    sendRequest().then(()=>history('/login'))
  };




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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={inputs.username}
                  onChange={handleChange}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  type='email'
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </Grid>


            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>


            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>


          </Box>
        </Box>
      </Container>
      <br/>
      <br/>
    </ThemeProvider>
  );
}
export default SignUp