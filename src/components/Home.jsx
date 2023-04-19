import React, { useRef } from 'react';
import Tech from './Tech';
import bitmoji from '../assets/bitmoji.svg';
import { Box, Container, Typography, Paper, styled } from '@mui/material';
import Image from 'react-bootstrap/Image';

export default function Home(){


  return(
    <>
      <Container id='home' className='' sx={{bgcolor:'#bdbdbd'}} maxWidth="xxl">
        <Image className='bitmoji' src={bitmoji} alt="Nereida's bitmoji" />
        
        <Typography className='title' sx={{pt:3,}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{py:2}} bgcolor='dark' variant='h4' fontFamily={'Shadows Into Light Two'}>
        eLearning Content Developer and Instructional Design</Typography>

            <Box 
              className='about'
              sx={{
                fontSize: '2rem',
                my: 5,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                '& > :not(style)': {
                  m: 1,
                  width: '80vw',
                  height: 200,
                },
              }}
              elevation='8'
            >
              <Typography variant='h6'>
                As a software developer, I bring a unique combination of technical expertise and
                experience in education and digital content design to the table. With a solid
                foundation in building with HTML and CSS, I am skilled in JavaScript and other
                relevant frameworks like Bootstrap and React. I am passionate about building
                efficient, user-friendly, and visually appealing software solutions. Keeping up with
                emerging technologies and trends in software development is my top priority. With an
                insatiable drive for learning and innovation, I can quickly adapt to new tools and
                techniques, delivering the most effective solutions to clients.
              </Typography>

              <Typography sx={{fontSize:'1.5rem'}}>
                Currently, I'm seeking opportunities to apply my skills and create meaningful digital
                content, from designing web pages and applications to developing and maintaing
                technical content.
              </Typography>

              <Typography>
                Please take a moment to browse through my projects and work experience. If you're
                looking for a passionate, driven, and dedicated team member, or would like to work
                together, let's connect!
              </Typography>
             
              
            </Box>

        <Box className=''>


        </Box>

      <Tech />

      </Container>
      

    </>

    
    
  );
}