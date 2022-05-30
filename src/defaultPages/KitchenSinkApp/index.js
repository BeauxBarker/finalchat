import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global } from "@emotion/core";

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { COMETCHAT_CONSTANTS } from '../../consts';
import Background_1 from "./background.webm";
import './video.css';
import {
 
  wrapperStyle,
  errorStyle,
  titleStyle,
  subtitleStyle,
  userContainerStyle,
  userWrapperStyle,
  thumbnailWrapperStyle,
  uidWrapperStyle,
  inputWrapperStyle,
  loginBtn,
} from "./style";

import { loaderStyle } from "./loader";

import * as actions from '../../store/action';


class KitchenSinkApp extends React.PureComponent {

  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  login = (uid) => {
    
    if(!uid) {
      uid = this.myRef.current.value;
    }

    this.uid = uid;
    this.props.onLogin(this.uid, COMETCHAT_CONSTANTS.AUTH_KEY);
  }
  
  render() {

    let loader = null;
    if (this.props.loading) {
      loader = (<div className="loading">Loading...</div>);
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (<p css={errorStyle()}>"error"</p>);
    }


    let authRedirect = null;
    if (this.props.isLoggedIn) {
      authRedirect = <Redirect to="/" />
    }

    return (
      <React.Fragment>
      <Global styles={loaderStyle} />
      
      <div css={wrapperStyle()}>
          {authRedirect}
          {loader}
          
          
            <div css={userContainerStyle()}>
              <p css={titleStyle()}>
              <div 
                className="video">
                <video className='video' id="video" autoPlay loop muted>
                <source src={Background_1} type='video/mp4' />
                </video>
               </div> 
              </p>
            </div><br/>
           
              <div css={uidWrapperStyle()}>
              
                <div>
                  <p css={subtitleStyle()}>Login to Dashboard</p>
                </div>
                <div css={inputWrapperStyle()}>
               
                <input ref={this.myRef} type="text" placeholder="Enter your UID here"  />
              </div>
              <div>
              {errorMessage}
              </div>
              <div css={loginBtn()}><button type="button" onClick={() => this.login()}>Login</button></div>
            </div>
          </div>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    isLoggedIn: state.isLoggedIn
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: ( uid, authKey ) => dispatch( actions.auth( uid, authKey ) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( KitchenSinkApp );
