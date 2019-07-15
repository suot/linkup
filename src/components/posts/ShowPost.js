import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Card, CardBody, Button } from 'reactstrap';

import {registerCallback} from '../../store/actions/callbackActions'
import {ShowComment, CreateComment} from '../packages/comment'

class ShowPost extends Component{
  constructor(props){
    super(props);
    this.state = this.getState(props);
    this.updateState = this.updateState.bind(this);
  }

  getState(props){
    return {
      post: {
        id: props.post.id,
        text: props.post.text,
        image: props.post.image,
        total_comments: props.post.total_comments,
        comments: props.post.comments,
      }
    };
  }

  updateState(state) {
    this.setState(state);
  }

  componentDidMount(){
    this.props.register(this.updateState, this.state.post.id, "ShowPost");
  }

  displayComments(){
    var items = []

    if (this.state.post.comments == undefined)
      items.push( <p>Comments not available </p>);
    else{
      for(const comment of this.state.post.comments){
        items.push( <ShowComment comment={comment}/> );
      }
    }

    return items;
  }

  render(){
    return(
      <Card>
        <CardBody>
          {this.state.post.text}
          <br/>
          <img src={this.state.post.image} />
          
          <hr/>  
          <p>{this.state.post.total_comments} Comments</p> 
          
          <hr/>
          {this.displayComments()}

          <div>  
            <CreateComment post={this.state.post} />
          </div>
        </CardBody>
      </Card>
      );
  }
}


const mapsToProps = (state) => {
  return({
    user: state.firebase.profile,
  });
}

const mapsDispatchToProps = (dispatch) => {
  return{
    register: (event, id, name) => dispatch(registerCallback(event, id, name)),
  };
}

export default connect(mapsToProps, mapsDispatchToProps)(ShowPost)
