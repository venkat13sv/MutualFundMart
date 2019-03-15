import React, {Component} from 'react';
import  {userActions}   from '../../_actions/user.actions.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchItem from '../MainPage/SearchItem';


class Confirm extends Component {
  constructor(props) {
    super(props);
  //  const {id} = props.match.params;
  //   let items=JSON.parse(localStorage.schemes);
    if(!this.props.user)
     window.location=("/");
    this.submit = this.submit.bind(this);

    this.state={

      isEmpty:false,
      submitted:false
    };
  }
  logOutHandler=(e)=>{
    this.props.dispatch(userActions.logout);
     window.location=("/");
  }

  async submit(ev) {
    // User clicked submit



//  if (response.ok) console.log("Purchase Complete!")
  }
  cartContents(){
    const hcontent=[];
    const cart =this.props.cart.orders;
    console.log("cart"+ JSON.stringify(cart));
    for(let i=0;i<cart.length;i++)
    {
      hcontent.push(
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs">
                <img
                  src="http://placehold.it/100x100"
                  alt="..."
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-10">
                <h4 className="nomargin">{cart[i].sname}</h4>
                <p>
              {cart[i].description}
                </p>
              </div>
            </div>
          </td>
          <td data-th="Price">₹ {cart[i].iamount}</td>
          <td data-th="Quantity">
            <input
              type="number"
              className="form-control text-center"
              defaultValue={1}
            />
          </td>
          <td data-th="Subtotal" className="text-center">

          </td>
          <td className="actions" data-th>
            <button className="btn btn-info btn-sm">
              <i className="fa fa-refresh" />
            </button>
            <button className="btn btn-danger btn-sm">
              <i className="fa fa-trash-o" />
            </button>
          </td>
        </tr>
      );

    }
    return hcontent;
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
      <div className="container">
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Fund</th>
            <th style={{ width: "10%" }}>Monthly SIP</th>
            <th style={{ width: "8%" }}>No of terms</th>
            <th style={{ width: "22%" }} className="text-center">
              Subtotal
            </th>
            <th style={{ width: "10%" }} />
          </tr>
        </thead>
        <tbody>
        {this.cartContents()}
        </tbody>
        <tfoot>
          <tr className="visible-xs">
            <td className="text-center">
              <strong>Total 1.99</strong>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" className="btn btn-warning">
                <i className="fa fa-angle-left" /> Continue Shopping
              </a>
            </td>
            <td colSpan={2} className="hidden-xs" />
            <td className="hidden-xs text-center">
              <strong>Total $150.00</strong>
            </td>
            <td>
              <a
                href="https://www.paypal.com/webapps/hermes?token=5EY097812P7754247&useraction=commit&mfid=1546377013907_cf1dec6830d7"
                className="btn btn-success btn-block"
              >
                Checkout <i className="fa fa-angle-right" />
              </a>
            </td>
          </tr>
        </tfoot>
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

const connectedConfirmPage = connect(mapStateToProps)(Confirm);
export { connectedConfirmPage as Confirm };
