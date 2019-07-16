import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Row } from 'reactstrap'

class ShowComment extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <img class="img-fluid" src={this.props.post.image} width="40px" height="40px" />
        <p class="badge">{this.props.comment.text}</p>
        <hr/>
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
