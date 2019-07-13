import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Card, CardBody, Col, Label, Row } from 'reactstrap';

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

  render(){
    return(
      <div>
        <Row>
          <Col sm="3">
            <UserInfo />
          </Col>
          
          <Col sm="6">
            <CreatePost />
            <ShowPost />
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
