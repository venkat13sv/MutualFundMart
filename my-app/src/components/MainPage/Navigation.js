import React from 'react';
import {SignIn} from './SignIn';
import { SignUp } from './SignUp';
import SearchItem from './SearchItem';
export default class Navigation extends React.Component {
    render() {
        return (
         <div>
         <div className="header">

		<div className="w3layouts_header_right">
			<div className="agileits-social top_content">
					<ul>
							<li><a href="/"><i className="fa fa-facebook"></i></a></li>
							<li><a href="/"><i className="fa fa-twitter"></i></a></li>
							<li><a href="/"><i className="fa fa-rss"></i></a></li>
							<li><a href="/"><i className="fa fa-vk"></i></a></li>
						</ul>
				</div>
		</div>
		<div className="w3layouts_header_left">
			<ul>
					<li><a href="#" data-toggle="modal" data-target="#myModal2"><i className="fa fa-user" aria-hidden="true"></i> Sign in</a></li>
					<li><a href="#" data-toggle="modal" data-target="#myModal3"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sign up</a></li>
				</ul>

		</div>
		<div className="clearfix"> </div>
	</div>
<div className="header_mid">
		<div className="w3layouts_header_mid">
			<ul>
				<li>
					<div className="header_contact_details_agile"><i className="fa fa-envelope-o" aria-hidden="true"></i>
						<div className="w3l_header_contact_details_agile">
							 <div className="header-contact-detail-title">Send us a Message</div>
							<a href="mailto:info@example.com">info@funding.com</a>
						</div>
				   </div>
			    </li>
				<li>
					<div className="header_contact_details_agile"><i className="fa fa-phone" aria-hidden="true"></i>
						<div className="w3l_header_contact_details_agile">
							 <div className="header-contact-detail-title">Give us a Call</div>
							<a className="w3l_header_contact_details_agile-info_inner"> 919-993-1000 </a>
						</div>
				   </div>
			    </li>
				<li>
					<div className="header_contact_details_agile"><i className="fa fa-clock-o" aria-hidden="true"></i>
						<div className="w3l_header_contact_details_agile">
							 <div className="header-contact-detail-title">Opening Hours</div>
							<a className="w3l_header_contact_details_agile-info_inner">Mon - Sat: 7:00 - 18:00</a>
						</div>
				   </div>
			    </li>
				<li>
					<div className="header_contact_details_agile"><i className="fa fa-map-marker" aria-hidden="true"></i>
						<div className="w3l_header_contact_details_agile">
							 <div className="header-contact-detail-title">3007 Sarah Drive</div>
								<a className="w3l_header_contact_details_agile-info_inner">Franklin, LA 70538 </a>
						</div>
				   </div>
			    </li>
			</ul>
		</div>
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
						<li className="active"><a href="index.html"><span data-hover="Home">Home</span></a></li>
						<li><a href="about.html"><span data-hover="About Us">About Us</span></a></li>
						<li><a href="events.html"><span data-hover="Events">Products</span></a></li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown"><span data-hover="Categories">Categories</span> <b className="caret"></b></a>
							<ul className="dropdown-menu agile_short_dropdown">
								<li><a href="icons.html">Equity</a></li>
								<li><a href="typography.html">Tax savings</a></li>
							</ul>
						</li>
						<li><a href="/contact"><span data-hover="Mail Us">Contact Us</span></a></li>
					</ul>
				</nav>

			</div>
		<SearchItem></SearchItem>
		</nav>
		</div>
<SignIn></SignIn>
<SignUp></SignUp>
</div>
);
       }
}
