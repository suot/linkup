import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

import {ShowPost, CreatePost} from './packages/post'
import UserInfo from './users/UserInfo'
import FriendList from './friends/FriendList'


class Home extends Component{

  constructor(props){
    super(props);
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
  return({
    user: state.firebase.profile,
  });
}

export default connect(mapsToProps)(Home)
