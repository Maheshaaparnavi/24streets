import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      minWidth:270,
      backgroundColor:'',
      maxwidth:'md'
    },
    
    title: {
      fontfamily: "Nunito", 
      fontSize: 26,
      variant:"h3"
    },
    pos: {
      marginBottom: 12,
      variant:"h3"
    },
    
    CardMedia:{
      paddingTop:'56.25%',
      backgroundColor:'#02162F'
    },
    CardGrid:{
      padding:'20px 0'
    
    },
    DesktopMacIcon:{
      marginRight:'20px',
      fontcolor:'red'
    },
    button:{
      marginTop:'100px'
    
    },
    footer:{
       backgroundColor:'white',
       padding:'50px 0',
       align:'center'
  
    }
    
    
  });
  export default useStyles;