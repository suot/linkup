import React, {Component} from 'react'
import {connect} from 'react-redux'

import { Input, Form, Button } from 'reactstrap';
import { createComment } from '../../../store/actions/commentActions'
import { executeCallback } from '../../../store/actions/callbackActions'

class CreateComment extends Component{
  constructor(props){
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const props = this.props; 
    props.updateComment(e.target, props.post.id)
    .then(data => {
      var state = {
        ...props.post,
        total_comments: props.post.total_comments+1,
        comments: [ ...props.post.comments, data]
        };
      state = {post: {...state}};

      this.props.updateParentComponent(props.post.id, "ShowPost", state);
    });
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input name="comment[text]" placeholder="Comment..." />
        </Form>
      </div>
      );
  }
}


const mapsToProps = (state) => {
  return({
    user: state.firebase.profile,
  });
}

const mapsDispatchToProps = (dispatch) => {
  return {
    updateComment: (newComment, postID) => dispatch(createComment(newComment, postID)),
    updateParentComponent: (id, name, nextState) => dispatch(executeCallback(id, name, nextState))
  }
}

export default connect(mapsToProps, mapsDispatchToProps)(CreateComment)
