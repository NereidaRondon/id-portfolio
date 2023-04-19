import React, { } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';


// const theme = createTheme({
      
//     pallette:{
//       warning:{
//         main: 'black',
//       },
//     },
//     typography:{

//       fontFamily:'Roboto',
//       fontWeight: 300,
//       fontColor: 'primary',
  
//     }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <CssBaseline />
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
          <App />
        {/* </ThemeProvider> */}
      </BrowserRouter>
  </React.StrictMode>

);
