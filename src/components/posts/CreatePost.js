import React, {Component} from 'react'
import { connect } from 'react-redux'


class CreatePost extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div>
        I am Create Post
      </div>
      );
  }
} 


const mapStateToProps = (state) => {
  return {
    user: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(CreatePost);
