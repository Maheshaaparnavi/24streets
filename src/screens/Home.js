import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import logo from './images/logo-1.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import slider2 from './images/slider2.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: (props) =>
      props.color === 'red'
        ? 'red'
        : props.color === 'black' ? 'black': 'orange',
    
        border: 0,
        borderRadius: 3,
        boxShadow: (props) =>
          props.color === 'red'
            ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 60,
        padding:'0',
        margin: 20,
     width: 105
    
  },
  menuButton: {
    marginRight: '-20px',
  },
  title: {
    flexGrow: 1,
  },
  root1: {
    color: 'orange',
      '& span': {
        color: 'black'
      }   
  },
  
  
  
}));
   
  function MyButton(props) {
    const { color, ...other } = props;
    const classes = useStyles(props);
    return <Button className={classes.root} {...other} />;
  }
  
  MyButton.propTypes = {
    color: PropTypes.oneOf(['white', 'red']).isRequired,
  };

  
export default function Home()  {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

        return (
          <div>
            <AppBar style={{ backgroundColor: "white" }} position="static">
              <Toolbar>
                <img src={logo} width="150" height="60"></img>

                <Link
                  href="/"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    textDecoration: "none",
                    padding:20
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    textDecoration: "none",
                    padding:20
                  }}
                >
                Free IELTS Training Class
                </Link>
                <Link
                  href="/shop"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    textDecoration: "none",
                    padding:20
                  }}
                >
              Courses
                </Link>

                <Link
                  href="/"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    textDecoration: "none",
                    padding:20
                  }}
                >
                Free Resources
                  </Link>

                <React.Fragment>
                  Login
                  <MyButton
                    style={{ width:"80", fontSize:12, marginLeft:50,padding:0 }}
                    color="black"
                    startIcon={<PersonPinIcon />}
                  >
                    Login
                  </MyButton>
                  Register
                  <MyButton
                    style={{ width:"80", fontSize:12, padding:0 }}
                    color="orange"
                    startIcon={<PersonOutlineIcon />}
                  >
                    Register
                  </MyButton>
                  Free Demo
                  <MyButton
                    style={{ width:"80", fontSize:12,padding:0 }}
                    color="red"
                    startIcon={<ArrowRightAltIcon />}
                  >
                    Free Demo
                  </MyButton>
                </React.Fragment>
              </Toolbar>
            </AppBar>
            <div>
              <img src={slider2} width="100%" height="500"></img>
            </div>
          </div>
        );
    }

    
