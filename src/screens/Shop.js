import slider2 from './images/slider2.jpg'
import Home from "./Home"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Container, Grid, ThemeProvider ,Paper} from '@material-ui/core';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
  root: {
    
    backgroundColor:'',
    
  },
  
  title: {
    fontfamily: "Nunito", 
    fontSize: 26,
    variant:"h3"
  },
  pos: {
    marginBottom:5,
    variant:"h3"
  },
  
  CardMedia:{
    boxSizing:'content-box',
    backgroundColor:'#02162F'
  },
  CardGrid:{
    padding:'20px 0'
  
  },
  DesktopMacIcon:{
    marginRight:'20px',
    fontcolor:'red'
  },
  
  footer:{
     backgroundColor:'white',
     padding:'50px 0',
     align:'center',
     justifyContent:'center'

  },
  Card:{
    width:'80%',
    height:'80%',
    display:'flex',
    flexDirection:'row'

  },
  paper: {
    padding:20,
    textAlign: 'center',
    color:'black',
  },
  
  
});

   
export default function Shop() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <>
    <div >
      <Home/>
      <main>
      <Grid Container spacing ={4}>
      <Grid item xs={6}>
      <Card  className={classes.Card}>
                <CardMedia className={classes.CardMedia}>
                <CardContent className={classes.CardContent}>
                    <div className={classes.DesktopMacIcon}>
      
                <DesktopMacIcon fontSize="small"/><DesktopMacIcon />
                   </div>

        <Typography className={classes.Cardcontent} color="#FFFFFF" gutterBottom>
          OUT
        </Typography>
        <Typography variant="h3" component="h2">
          Nurses
        </Typography>
        <Typography className={classes.pos} color="#FFFFFF">
          Packages
        </Typography>
        
      </CardContent>
                </CardMedia>
              </Card>
        </Grid>
        <Grid item xs={6}>
        <Card  className={classes.Card}>
                <CardMedia className={classes.CardMedia}>
                <CardContent className={classes.CardContent}>
                    <div className={classes.DesktopMacIcon}>
      
                <DesktopMacIcon fontSize="small"/><DesktopMacIcon />
                   </div>

        <Typography className={classes.Cardcontent} color="#FFFFFF" gutterBottom>
          OUT
        </Typography>
        <Typography variant="h3" component="h2">
          Nurses
        </Typography>
        <Typography className={classes.pos} color="#FFFFFF">
          Packages
        </Typography>
        
      </CardContent>
                </CardMedia>
              </Card>
        </Grid>
</Grid>
      <Card className={classes.root} >
        <Container className={classes.CardGrid}maxWidth="md">
          <Grid Container spacing ={4}>
            <Grid item>
              <Card  className={classes.Card}>
                <CardMedia className={classes.CardMedia}>
                <CardContent className={classes.CardContent}>
                    <div className={classes.DesktopMacIcon}>
      
                <DesktopMacIcon fontSize="small"/><DesktopMacIcon />
                   </div>

        <Typography className={classes.Cardcontent} color="#FFFFFF" component="h2" align="left">
          IELTS
        </Typography>
        <Typography >
          Acadamic
        </Typography>
        <Typography className={classes.pos} color="#FFFFFF">
          Packages
        </Typography>
        
      </CardContent>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Container>
      
      <CardActions>
        
      </CardActions>
    </Card>
    <Card className={classes.root} >
        <Container className={classes.CardGrid}maxWidth="md">
          <Grid Container spacing ={4}>
            <Grid item>
              <Card  className={classes.Card}>
                <CardMedia className={classes.CardMedia}>
                <CardContent className={classes.CardContent}>
                    <div className={classes.DesktopMacIcon}>
      
                <DesktopMacIcon fontSize="small"/><DesktopMacIcon />
                   </div>

        <Typography className={classes.Cardcontent} color="#FFFFFF" gutterBottom>
          IELTS
        </Typography>
        <Typography variant="h3" component="h2">
          Genaral
        </Typography>
        <Typography className={classes.pos} color="#FFFFFF">
          Packages
        </Typography>
        
      </CardContent>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Container>
      
      <CardActions>
        
      </CardActions>
    </Card>

    <Card className={classes.root} >
        <Container className={classes.CardGrid}maxWidth="md">
          <Grid Container spacing ={4}>
            <Grid item>
              
            </Grid>
          </Grid>
        </Container>
      
      <CardActions>
        
      </CardActions>
    </Card>
    <Card className={classes.root} >
        <Container className={classes.CardGrid}maxWidth="md">
          <Grid Container spacing ={4}>
            <Grid item>
              <Card  className={classes.Card}>
                <CardMedia className={classes.CardMedia}>
                <CardContent className={classes.CardContent}>
                    <div className={classes.DesktopMacIcon}>
      
                <DesktopMacIcon fontSize="small"/><DesktopMacIcon />
                   </div>

        <Typography className={classes.Cardcontent} color="#FFFFFF" gutterBottom>
          OET
        </Typography>
        <Typography variant="h3" component="h2">
          Doctor
        </Typography>
        <Typography className={classes.pos} color="#FFFFFF">
          Packages
        </Typography>
        
      </CardContent>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Container>
      
      <CardActions>
        
      </CardActions>
    </Card>

    </main>
    <footer className={classes.footer}>
      <Typography variant="h3" align="center">
        Live Classes
      </Typography>
      <Typography align="center">
        Sign up for free to access Live Classes
      </Typography>
      <Button
        variant="contained"
        color="primary" align="center"
        justifyContent= 'center'
        endIcon={< ArrowForwardIcon></ ArrowForwardIcon>}
      >Sign up</Button>
    </footer>
      
      
    </div>
    </>
  );
}

    
