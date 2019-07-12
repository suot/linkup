import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Input, Button, Card, CardBody, Row, Col, Form } from 'reactstrap'
import {createPost} from '../../store/actions/postActions'

class CreatePost extends Component{
  constructor(props){
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(document.querySelector('form'));
  }

  render(){
    return (
      <div>
        <Card>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <Input type="textarea" name="post[text]" placeholder="Write your mind..." />
            
              <Row>
                <Col sm="6">
                  <Input type="file" name="post[image_attributes][file]" />
                </Col>

                <Col sm="6">
                  <Button> Post </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
      );
  }
} 


const mapStateToProps = (state) => {
  return {
    user: state.firebase.profile,
  }
}

const funcToDispatch = (dispatch) => {
  return {
    createPost: (newPost) => dispatch(createPost(newPost))
  }
}

export default connect(mapStateToProps, funcToDispatch)(CreatePost);
