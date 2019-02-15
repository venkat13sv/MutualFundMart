import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchItem from '../MainPage/SearchItem';
import { history } from '../../_helpers/history.js';
import  {userActions}   from '../../_actions/user.actions.js';

class HomePage extends React.Component {

  constructor(props) {
       super(props);
      if(!this.props.user)
       window.location=("/")

     }
  logOutHandler=(e)=>{
    this.props.dispatch(userActions.logout);
     window.location=("/");
  }
    render() {
      const { user } = this.props;
        return (
         <div>
         <div className="header">

		<div className="w3layouts_header_right">
			<div className="agileits-social top_content">
					<ul>
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-rss"></i></a></li>
							<li><a href="#"><i className="fa fa-vk"></i></a></li>
						</ul>
				</div>
		</div>
		<div className="w3layouts_header_left">
    <ul>
        <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i> Welcome {user.firstName}</a></li>
        <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
        <li><a href="#" onClick={e=>this.logOutHandler(e)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sign Out</a></li>
      </ul>
		</div>
		<div className="clearfix"> </div>
	</div>

	<div className="banner">
		<nav className="navbar navbar-default">
			<div className="navbar-header navbar-left">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<h1><a className="navbar-brand" href="index.html"><span>F</span>unding</a></h1>
			</div>

			<div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
				<nav className="link-effect-2" id="link-effect-2">
					<ul className="nav navbar-nav">
            <li className="active"><a href="#"><span data-hover="Categories and Schemes">Categories and Schemes</span></a></li>
						<li ><a href="#"><span data-hover="My Schemes">My Schemes</span></a></li>
						<li><a href="#"><span data-hover="Profile">Profile</span></a></li>
						<li><a href="#"><span data-hover="Events"></span></a></li>

						<li><a href="#"><span data-hover="FeedBack">FeedBack</span></a></li>
					</ul>
				</nav>

			</div>
		<SearchItem></SearchItem>
		</nav>
		</div>

</div>
);
       }
}
function mapStateToProps(state) {
    const {  authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };