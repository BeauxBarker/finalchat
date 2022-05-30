import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { wrapperStyle, videoComponent, titleStyle, subTitleStyle, componentStyle, boxStyle, titleWrapperStyle, thumbnailWrapperStyle, componentTitleStyle, UIComponentStyle, descWrapperStyle, linkWrapperStyle, linkStyle, logoutBtn, logoutBtn2 } from "./style";

import * as actions from "../../store/action";

import CometChatUI from "./resources/CometChatUI.png";
import Component from "./resources/components.png";
import listComponent from "./resources/wall.png";
import chatvideo from './chatvideo.mp4'

class HomePage extends React.Component {
	render() {
		let authRedirect = null;
		if (!this.props.isLoggedIn) {
			authRedirect = <Redirect to="/login" />;
		}

		return (

			<div css={wrapperStyle()}>
				{authRedirect}
				<div css={videoComponent()}>
				<video className='video' id="video" autoPlay loop muted>
							<source src={chatvideo} type='video/mp4' />
							</video>
				</div>
				
				<div css={UIComponentStyle()}>
					<div css={boxStyle()}>
					
						<div css={descWrapperStyle()}>
						
						</div>
						<ul css={linkWrapperStyle()}>
							<li>
								<Link css={linkStyle()} to="/embedded-app">
								<div css={logoutBtn2()}><button>Launch</button>	</div>
								</Link>
								</li>
								<div css={logoutBtn()}>
									<button type="button" onClick={this.props.onLogout}>
										Logout
									</button>
								</div>
							
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		error: state.error,
		isLoggedIn: state.isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
