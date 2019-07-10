import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Input, Button, Card, CardBody, Row, Col } from 'reactstrap'

class CreatePost extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div>
        <Card>
          <CardBody>
            <Input type="textarea" name="text" placeholder="Write your mind..." />
            
            <Row>
              <Col sm="6">
                <Input type="file" name="image" />
              </Col>

              <Col sm="6">
                <Button type="file"> Post </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        
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
