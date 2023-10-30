import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: { height: '70vh' },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Container>
      <h1>Welcome to our Sign Language Detector page!</h1>
      <div>
        <h3>We are a team of developers who are passionate about making technology more accessible to everyone. Our Sign Language Detector is an innovative tool designed to bridge the communication gap between the hearing-impaired and those who can hear.</h3>
      
      <div className={classes.imgContainer}>
      <img class='h-screen flex items-center' className={classes.img}
        src='https://miro.medium.com/v2/resize:fit:1400/0*Iv-GIxB6KwJpZPaQ'
        ></img>
      </div>
         <h3>
         Our Sign Language Detector is also designed to be user-friendly, with a simple interface that anyone can use. We believe that technology should be accessible to everyone, and we are committed to making our detector available to as many people as possible.</h3>
         <blank></blank>
         <h3>
         We are constantly working to improve our Sign Language Detector and add new features to enhance its functionality. Our goal is to make it an indispensable tool for the hearing-impaired community and a valuable resource for anyone who wants to learn sign language.
         </h3>
      </div>
    </Container>
  );
}
