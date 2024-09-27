// app.js

import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import ProductList from './components/ProductList';
import LoginSignup from './components/LoginSignup';
import { Container, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Customer Feedback Management System
        </Typography>
      </Box>

      {user ? (
        <>
          <Box sx={{ mb: 4 }}>
            <FeedbackForm />
          </Box>
          <Box sx={{ mb: 4 }}>
            <FeedbackList />
          </Box>
          <Box sx={{ mb: 4 }}>
            <ProductList />
          </Box>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </>
      ) : (
        <LoginSignup setUser={setUser} />
      )}
    </Container>
  );
}

export default App;
