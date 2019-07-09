import React, {Component} from 'react'
import {connect} from 'react-redux'


class ShowComment extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        I am Show Comment
      </div>
      );
  }
}


const mapsToProps = (state) => {
  return({
    user: state.firebase.profile,
  });
}

export default connect(mapsToProps)(ShowComment)
