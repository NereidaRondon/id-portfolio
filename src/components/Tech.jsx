import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import video from '../assets/My ID Process.mp4';

export default function Intro() {

  return (
    <React.Fragment>
      <Container maxWidth="xxl" sx={{pb:10, bgcolor:'#bdbdbd'}}>
        
        <Typography className='title' sx={{pt:10}} variant='h3' fontFamily={'Shadows Into Light Two'}>Technologies</Typography>
        <Paper
         elevation={8}
          sx={{
            py: 3,
            bgcolor:'secondary',
            width: 300,
            height: 300,
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.dark',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        {/* <video src={video} width="600" height="300" controls="controls" autoplay="true" /> */}
      </Container>
    </React.Fragment>

  );
}

