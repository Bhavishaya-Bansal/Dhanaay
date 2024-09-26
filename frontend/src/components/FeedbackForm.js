import React, { useState, useEffect } from 'react';
import api from '../api';
import { 
  TextField, 
  Button, 
  Typography, 
  MenuItem, 
  Select, 
  InputLabel, 
  FormControl, 
  Box, 
  Grid 
} from '@mui/material';

function FeedbackForm() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFeedback = {
      userId: 1,
      productId: selectedProduct,
      rating,
      comment,
    };

    try {
      const response = await api.post('/feedback/add', newFeedback);
      setSelectedProduct('');
      setRating(5);
      setComment('');
      setError('');
      window.location.reload();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <Box sx={{ width: '50%', margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Submit Feedback</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Product</InputLabel>
          <Select 
            value={selectedProduct} 
            onChange={(e) => setSelectedProduct(Number(e.target.value))}
            required
          >
            <MenuItem value="">
              <em>Select a product</em>
            </MenuItem>
            {products.map(product => (
              <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Rating"
          type="number"
          inputProps={{ min: 1, max: 5 }}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Comment"
          multiline
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          margin="normal"
          required
        />

        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
}

export default FeedbackForm;