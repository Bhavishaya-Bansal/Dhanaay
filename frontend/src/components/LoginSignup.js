import React, { useState } from 'react';
import api from '../api';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Container, 
  Grid, 
  Link 
} from '@mui/material';

const LoginSignup = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation: Check if fields are empty
    if (!formData.username || !formData.password) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      // Choose the endpoint based on whether it's login or signup
      const endpoint = isLogin ? '/users/login' : '/users/signup';

      // Send a request to the backend for login/signup verification
      const response = await api.post(endpoint, formData);

      if (response.status === 200 || response.status === 201) {
        const userData = response.data; // Assuming user data is returned
        localStorage.setItem('user', JSON.stringify(userData)); // Store user in localStorage
        setUser(userData); // Update user state in App.js
      }
    } catch (error) {
      // Handle error messages from the API
      setError(
        error.response?.data?.message || 
        (isLogin ? 'Invalid login credentials. Please try again.' : 'Signup failed. Email might already be in use.')
      );
    }
  };

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
    setError(''); // Reset the error when switching between login and signup
    setFormData({ username: '', password: '' }); // Clear the form fields on switch
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {isLogin ? 'Login' : 'Signup'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            autoComplete="email"
            value={formData.username}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                variant="body2"
                component="button"
                onClick={handleFormSwitch} // Switch between login and signup
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : 'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginSignup;
