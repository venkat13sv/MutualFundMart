import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchItem from '../MainPage/SearchItem';
import { history } from '../../_helpers/history.js';
import  {userActions}   from '../../_actions/user.actions.js';
import {  Schemes } from './Schemes.js';


class CardView extends React.Component {

  constructor(props) {
       super(props);
       const {id} = props.match.params;

       let items=JSON.parse(localStorage.schemes);
       if(!this.props.user)
        window.location=("/");
       this.handleClick = this.handleClick.bind(this);
       this.state={
         item:items[id],
         isEmpty:false,
         submitted:false,
         id:id
       };
     }
     componentDidMount() {
       window.scrollTo(0, 0)
     }
     handleClick() {
       const { dispatch }=this.props;
       dispatch(userActions.addItem(this.state.item));
       //console.log(JSON.stringify(this.props.cart));
     }

  logOutHandler=(e)=>{
    this.props.dispatch(userActions.logout);
     window.location=("/");
  }

    render() {
      const count=this.props.cart.orders.length;
      const { user } = this.props;
      const {cart }= this.props;
      console.log("Cart"+ JSON.stringify(cart));
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
        <li><i className="fa fa-shopping-cart" aria-hidden="true"><span className='badge badge-warning' id='lblCartCount'> {count} </span></i></li>
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
    <div  style={{ "marginTop": "100px","marginLeft": "100px","marginBottom": "100px","width": "800px","height":"400px","border":"1px solid #cfcfcf"}}>
    <table style={{"margin":"20px 0px 0px 20px"}}>
      <tbody>

        <tr><td><h1 className="fundName">{this.state.item.sname}</h1></td></tr>
        <br />

        <tr><td><h6 className="fundName">Fund Details</h6></td></tr>
        <br />
        <tr><td>Company Name:</td><td>{this.state.item.cname}</td></tr>
        <tr><td>Fund Category:</td><td>{this.state.item.category}</td></tr>
        <tr><td>Minimum SIP amount:</td><td>₹{" " + this.state.item.iamount}</td></tr>
        <tr>Description:<td>{this.state.item.description}</td></tr>
        <br />
        <tr><td>      <Link to="/home">  <button className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Back
                </button>
                </Link></td><td><button type="button" class="btn btn-success" onClick={this.handleClick}>Invest Now</button></td></tr>
        <div>


        </div>
      </tbody>
    </table>
    </div>
</div>
);
       }
}
function mapStateToProps(state) {
    const {  authentication,cart } = state;
    const { user } = authentication;
    return {
        user,cart
    };
}

const connectedView = connect(mapStateToProps)(CardView);
export { connectedView as CardView };
