import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

const mapStateToProps = (state)=> {
  return{
    friends : state.navbarInfo.friends
  }
}
const mapDispatchToProps =(dispatch)=> {
  return null;
}
const NavbarInfoContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default NavbarInfoContainer;