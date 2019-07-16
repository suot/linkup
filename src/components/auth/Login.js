import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/authActions'

import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(e.target);
  };

  render() {
    const { auth } = this.props;
    if(auth.token) return <Redirect to='/' />;

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <h1 className="mb-4 text-center text-primary">Login</h1>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" name="email" id={"email"} onChange={this.updateInput} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="current-password" name="password" id={"password"} onChange={this.updateInput} />
                      <Input type="hidden" name="grant_type" value="password" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4 submit">Login</Button>
                        <div className="red-text">
                          {
                            this.props.authError ? <p>{ this.props.authError }</p> : null
                          }
                        </div>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                        <Link to="/register">
                          <Button color="link" className="px-0">Register</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.auth,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      login: (credentials) => dispatch(signIn(credentials))
      // logIn: (credentials) =>  {
      //     firebase.auth().signInWithEmailAndPassword(
      //         credentials.email,
      //         credentials.password
      //     ).then(() => {
      //         dispatch({ type: 'LOGIN_SUCCESS' });
      //     }).catch((err) => {
      //         dispatch({ type: 'LOGIN_ERROR', err })
      //     });
      // }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
