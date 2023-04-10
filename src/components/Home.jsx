import React, { useRef } from 'react';
//import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import bitmoji from '../assets/bitmoji.svg';
import { Container, Typography } from '@mui/material';
import Image from 'react-bootstrap/Image';


export default function Home(){





  return(
    <>
      <Container id='home' className='bg-secondary' maxWidth="xxl">
        <Image className='bitmoji' src={bitmoji} alt="Nereida's bitmoji" />
      <Typography className='title' sx={{pt:3,}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>Nereida Rondon </Typography>
      <Typography className='subtitle' sx={{py:2}} bgcolor='dark' variant='h5' fontFamily={'Shadows Into Light Two'}>
      Instructional Designer, Learning Content Developer, and Learning Technologist...</Typography>

        <div className="box-3">
          
          <p>
            As a software developer, I bring a unique combination of technical expertise and
            experience in education and digital content design to the table. With a solid
            foundation in building with HTML and CSS, I am skilled in JavaScript and other
            relevant frameworks like Bootstrap and React. I am passionate about building
            efficient, user-friendly, and visually appealing software solutions. Keeping up with
            emerging technologies and trends in software development is my top priority. With an
            insatiable drive for learning and innovation, I can quickly adapt to new tools and
            techniques, delivering the most effective solutions to clients.
          </p>

          <p>
            Currently, I'm seeking opportunities to apply my skills and create meaningful digital
            content, from designing web pages and applications to developing and maintaing
            technical content.
          </p>

          <p>
            Please take a moment to browse through my projects and work experience. If you're
            looking for a passionate, driven, and dedicated team member, or would like to work
            together, let's connect!
          </p>
        </div>
      </Container>

      <About />

      <Skills />

    </>

    
    
  );
}