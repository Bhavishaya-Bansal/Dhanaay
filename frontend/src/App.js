// // import './App.css';
// // import FeedbackForm from './components/FeedbackForm';
// // import FeedbackList from './components/FeedbackList';
// // import ProductList from './components/ProductList';
// // import Cp from './components/Cp';


// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Customer Feedback Management System</h1>
// //       <Cp/>
// //       {/* <FeedbackForm />
// //       <FeedbackList />
// //       <ProductList /> */}
// //     </div>
// //   );
// // }

// // export default App;


// import './App.css';
// import FeedbackForm from './components/FeedbackForm';
// import FeedbackList from './components/FeedbackList';
// import ProductList from './components/ProductList';
// import Cp from './components/Cp';
// import { Container, Typography, Box } from '@mui/material';

// function App() {
//   return (
//     <Container>
//       <Box sx={{ textAlign: 'center', marginTop: 4 }}>
//         <Typography variant="h2" gutterBottom>
//           Customer Feedback Management System
//         </Typography>
//       </Box>

//       {/* Render Feedback Form */}
//       <Box sx={{ marginBottom: 4 }}>
//         <FeedbackForm />
//       </Box>

//       {/* Render Feedback List */}
//       <Box sx={{ marginBottom: 4 }}>
//         <FeedbackList />
//       </Box>

//       {/* Render Product List */}
//       <Box sx={{ marginBottom: 4 }}>
//         <ProductList />
//       </Box>
//     </Container>
//   );
// }

// export default App;


import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import ProductList from './components/ProductList';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h2" gutterBottom>
          Customer Feedback Management System
        </Typography>
      </Box>

      {/* Render Feedback Form */}
      <Box sx={{ marginBottom: 4 }}>
        <FeedbackForm />
      </Box>

      {/* Render Feedback List */}
      <Box sx={{ marginBottom: 4 }}>
        <FeedbackList />
      </Box>

      {/* Render Product List */}
      <Box sx={{ marginBottom: 4 }}>
        <ProductList />
      </Box>
    </Container>
  );
}

export default App;