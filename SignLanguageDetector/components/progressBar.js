import React from 'react';
import { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '250px',
  },
});

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 25,
    borderRadius: 5,
  },
  colorPrimary: {
    // backgroundColor: '#000',
  },
  bar: {
    borderRadius: 5,
    // backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const progressBar = ({ progress,name }) => {
  const classes = useStyles();

  var synthesis ;
  useEffect(() => {
    synthesis = window.speechSynthesis;
    if((progress*1)>=1){
      synthesis.speak(new SpeechSynthesisUtterance(name));
    }

  }, [name,progress]);

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant='determinate' value={progress * 100} />
    </div>
  );
};
export default progressBar;
