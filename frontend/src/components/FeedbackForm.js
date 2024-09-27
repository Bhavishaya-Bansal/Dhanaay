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
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function FeedbackForm() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [rating, setRating] = useState(0);
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
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.id : null; 

    const newFeedback = {
      userId: userId,
      productId: selectedProduct,
      rating,
      comment,
    };

    try {
      await api.post('/feedback/add', newFeedback);
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
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
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

        <Typography variant="h6" gutterBottom>Rating</Typography>
        <Grid container spacing={1} sx={{ mb: 2 }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <Grid item key={value}>
              <span onClick={() => setRating(value)} style={{ cursor: 'pointer' }}>
                {value <= rating ? <StarIcon color="primary" /> : <StarBorderIcon />}
              </span>
            </Grid>
          ))}
        </Grid>

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
