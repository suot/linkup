import React, {Component} from 'react'
import {connect} from 'react-redux'


class FriendList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        I am FriendList
      </div>
      );
  }
}


const mapsToProps = (state) => {
  return({
    user: state.firebase.profile,
  });
}

export default connect(mapsToProps)(FriendList)
