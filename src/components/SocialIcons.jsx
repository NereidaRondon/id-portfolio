import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { pink } from '@mui/material/colors';
import { Container } from '@mui/material';


export default function SocialIcons() {


  return (
    <Container className='bg-dark' maxWidth='xxl'>

      <Box className='' sx={{ py: 5}}>
        
        <Link to='mailto: nereida.rondon5@gmail.com' target='_blank'><AlternateEmailIcon sx={{ fontSize: 50, mx: 6 }} color="secondary"/></Link>
    
        <Link to='https://www.linkedin.com/in/nereidarondon/' target='_blank'><LinkedInIcon sx={{ fontSize: 50, mx: 6 }} color="info"/></Link>
        
        <Link to='https://github.com/NereidaRondon' target='_blank'><GitHubIcon sx={{ fontSize: 50, mx: 6, color: pink[200] }} /></Link>

      </Box>

    </Container>
  );
}