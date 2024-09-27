import React, { useState, useEffect } from 'react';
import api from '../api';
import { Typography, Card, CardContent, Box, Grid } from '@mui/material';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await api.get('/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setError('Failed to load feedback. Please try again later.');
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>Feedback List</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={2}>
        {feedbacks.map(feedback => (
          <Grid item xs={12} sm={6} md={4} key={feedback.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Product: {feedback.Product?.name}</Typography>
                <Typography>Rating: {feedback.rating}</Typography>
                <Typography>Comment: {feedback.comment}</Typography>
                <Typography>User: {feedback.User?.username}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeedbackList;
