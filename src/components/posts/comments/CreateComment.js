import React, {Component} from 'react'
import {connect} from 'react-redux'


class CreateComment extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        I am CreateComment
      </div>
      );
  }
}


const mapsToProps = (state) => {
  return({
    user: state.firebase.profile,
  });
}

export default connect(mapsToProps)(CreateComment)
