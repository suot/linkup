import React, {Component} from 'react'
import {connect} from 'react-redux'

import {ShowComment, CreateComment} from '../packages/comment'


class ShowPost extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        I am Show Post
        <div>  
          <ShowComment />
        </div>
        <div>  
          <CreateComment />
        </div>
      </div>
      );
  }
}


const mapsToProps = (state) => {
  return({
    user: state.firebase.profile,
  });
}

export default connect(mapsToProps)(ShowPost)
