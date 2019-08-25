import React,{Fragment} from 'react';
import { connect } from "react-redux"
import { Switch , BrowserRouter , Route , Link  } from "react-router-dom"
 
class Router extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this)
    return (
      <Fragment>

      </Fragment>
    )
  }
}

const StateToProps = (state)=>{
  return {

  }
}
const dispatchToProps=(dispatch)=>{
  return {

  }
}


export default (connect(StateToProps , dispatchToProps)(Router));
