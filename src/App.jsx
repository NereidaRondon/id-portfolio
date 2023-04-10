import React, { useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import Skills from './components/Skills';
import SocialIcons from './components/SocialIcons';


export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <AppRouter />
      <SocialIcons /> 
    </React.Fragment>
  );
}