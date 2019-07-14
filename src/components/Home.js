import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import ReactLoading from 'react-loading';

import {ShowPost, CreatePost} from './packages/post'
import UserInfo from './users/UserInfo'
import FriendList from './friends/FriendList'

import {getPosts} from '../store/actions/postActions'


class Home extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.updatePosts();
  }

  displayPosts() {
    var items = []
    
    if(this.props.posts === undefined || this.props.posts.length == 0 )
      items.push(<ReactLoading type="bubbles" height="10%" width={'20%'}/>);
    
    else
      for( const post of this.props.posts){
        items.push( <ShowPost key={post.id} post={post} /> )
      }   
      return items;
    
  }

  render(){
    return(
      <div>
        <Row>
          <Col sm="3">
            <UserInfo />
          </Col>
          
          <Col sm="6">
            <CreatePost />
            {this.displayPosts()}
          </Col>

          <Col sm="3">
            <FriendList />
          </Col>
        </Row>
      </div>
      );
  }
}


const mapsToProps = (state) => {
  return {
    user: state.firebase.profile,
    posts: state.poststore.posts,
  };
}

const mapsDispatchToProps = (dispatch) => {
  return {
    updatePosts: () => dispatch( getPosts() ),
  };
}

export default connect(mapsToProps, mapsDispatchToProps)(Home)
