import React from "react";
import { Link } from "@material-ui/core";
import { useState ,useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {},

  main: {
    height: '100vh',
    background: '#273036',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    height: '500px',
    borderRadius: '20px',
    margin: '16px',
  },
  signup: {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10%',
    color: 'white',
    fontFamily: 'Poppins',
    zIndex: '1',
    marginBottom: '24px',
    height: '800px',
  },
  subtitle: {
    width: '60%',
    margin: 'auto',

    paddingTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '4em',
  },
  imgContainer: {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: { height: '200px', borderRadius: '10px' },
  iconContainer: {
    margin: 'auto',
  },
  btn: {
    '&:hover': {
      color: '#fff',
      background: theme.palette.primary.main,
      cursor: 'pointer',
    },
    background: 'white',
    border: 'none',
    padding: '20px',
    borderRadius: '25px',
    fontSize: 20
  },
  landingImgContainer: {
    width: '35%',
    marginTop: 'auto',
  },
}));


function App() {
const [name, setName] = useState('');
  
  function handleChange(event) {
    setName(event.target.value);
  }
  
  function handleClick() {
    const message = `Hello ${name}!`;
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
  }

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <Link href="./detector">
      <button onClick={handleClick} className="btn">Get in</button>
      </Link>
    </div>
  )
}

export default App;
