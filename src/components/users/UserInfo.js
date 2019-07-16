import React, {Component} from 'react'
import {connect} from 'react-redux'


class UserInfo extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="sticky-top">
        <hr/>
        <img class="img-fluid mx-auto d-block" src="https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg" />
        <hr/>
      </div>
    );
  }
}


const mapsToProps = (state) => {
  return({
    user: state.firebase.profile,
  });
}

export default connect(mapsToProps)(UserInfo)
