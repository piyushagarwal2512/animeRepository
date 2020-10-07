import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';

import {withRouter} from "react-router-dom"
import { Typography} from "@material-ui/core"

const useStyles = (theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    margin:10,
    maxHeight:500
  },
  media: {
   height:400,
   // paddingTop: '56.25%', // 16:9
  },
  content:{
    height:100
  }
});

 class CardElement extends React.Component {


  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }
  

render(){
  const {classes,image,title}=this.props
  return (
    <div>
   
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
       <CardContent className={classes.content}>
  <Typography>{title}</Typography>
       </CardContent>
    
    </Card>
    </div>
  );
    }
}


export default withRouter(withStyles(useStyles)((CardElement)))
