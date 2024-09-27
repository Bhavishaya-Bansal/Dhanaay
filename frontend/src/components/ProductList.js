import React, { useState, useEffect } from 'react';
import api from '../api';
import { 
  Typography, 
  Card, 
  CardContent, 
  Box, 
  Grid 
} from '@mui/material';

function ProductList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    fetchFeedbacks();
    fetchProducts();
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

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.');
    }
  };

  const getAverageRating = (id) => {
    const filteredFeedbacks = feedbacks.filter(feedback => feedback.productId === id);
    if (filteredFeedbacks.length === 0) {
      return -1;
    }
    const sumWithInitial = filteredFeedbacks.reduce(
      (accumulator, currentValue) => accumulator + currentValue.rating,
      0,
    );
    return (sumWithInitial / filteredFeedbacks.length).toFixed(2);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>Product List</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>
                  <strong>Average Rating:</strong>{' '}
                  {getAverageRating(product.id) !== -1 ? getAverageRating(product.id) : 'No Ratings Yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
