import React, {Component} from 'react'
import {connect} from 'react-redux'


class ShowComment extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        {this.props.comment.text}
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
