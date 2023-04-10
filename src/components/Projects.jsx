import React from 'react';
import { Container, Typography, CardActionArea, Card, CardMedia, Paper, Box,  } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Grid from '@mui/material/Unstable_Grid2';
import Approach from './Approach';
import weather from '../assets/weather.webp';
import movie from '../assets/movie.webp';
import tictactoe from '../assets/tictactoe.webp';
import todo from '../assets/todo.webp';
import kinda from '../assets/Kinda.webp';

export default function Projects() {

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: 0,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

  return (

    <Container className='projects--container bg-secondary' sx={{}} maxWidth='xxl'> 
      <Typography className='title' sx={{py:3}} variant='h3' fontFamily={'Shadows Into Light Two'}>Projects</Typography>
      <Approach />

      <Box sx={{ flexGrow: 1 }}>
      <Grid className='m-0' container spacing={{ xs: 2, md: 4, lg: 6 }} columns={{ xs: 12, sm: 8, md: 12 }}>



    <LinkContainer to="/contact">
      


          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={tictactoe}
                      alt="green iguana"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>

                </LinkContainer>







          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={tictactoe}
                      alt="green iguana"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={tictactoe}
                      alt="green iguana"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={tictactoe}
                      alt="green iguana"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Item>
               <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={weather}
                      alt="Weather Dashboard App"
                      />
                  </CardActionArea>
                </Card>
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={movie}
                      alt="Movie Review App"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={tictactoe}
                      alt="Coded Tic Tac Toe game with JavaScript."
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={todo}
                      alt="To Do List App coded with JavaScript"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height='250'
                      image={kinda}
                      alt="Coded a Word Game, Kinda like Wordle"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>



      </Grid>
    </Box>


     </Container>

  
  );
}

