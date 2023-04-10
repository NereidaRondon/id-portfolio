import React from 'react';
import { Container, Typography } from '@mui/material';

export default function About(){
  return(
    <Container id='about' className='bg-secondary' maxWidth='xxl'>

    <div id='about'>
      <Typography className='title' sx={{py:3}} variant='h3' fontFamily={'Shadows Into Light Two'}>About</Typography>

      
    </div>
    </Container>

  );
}