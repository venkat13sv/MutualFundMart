import React, {Component} from 'react';
import { connect } from 'react-redux';
import  {userActions}   from '../../_actions/user.actions.js';
import { Link } from 'react-router-dom';


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.state={
      cardName:"",
      cardNumber:"",
      expiryMM:"",
      expiryYY:"",
      cvv:"",
      submitted:false,

    };
  }
  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  async submit(ev) {
    this.setState({submitted:true});
      const paymentData={
        card:this.state,
        user:this.props.user,
        orders:this.props.cart.orders
      };
      this.props.dispatch(userActions.makePayment(paymentData));
      console.log(JSON.stringify(paymentData));

//  if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    const total=localStorage.getItem('total');
    return (

      <div style={{"width":"800px","paddingTop":"100px","paddingLeft":"500px"}}>
      <h1 style={{"paddingLeft":"15px","paddingBottom":"30px"}}>Payment Page</h1>
      {this.state.submitted&&this.props.alert.message}
      {this.state.submitted&&<p>{this.props.alert.message}</p>&&  <Link to="/home">  <button className="btn btn-warning">
            <i className="fa fa-angle-left" /> Back
          </button>
          </Link>}
      { !this.state.submitted&&
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Payment Details</h3>
                <div className="checkbox pull-right">
                  <label>
                    <input type="checkbox"  />
                    Remember
                  </label>
                </div>
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="cardNumber"
                        value={this.state.cardNumber}
                        onChange={this.handleChange}
                        placeholder="Valid Card Number"

                        autofocus
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-7 col-md-7">
                      <label htmlFor="expityMonth">EXPIRY DATE</label>
                      <div className="form-group">

                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            name="expiryMM"
                            placeholder="MM"
                            value={this.state.expiryMM}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            name="expiryYY"
                            value={this.state.expiryYY}
                            onChange={this.handleChange}
                            placeholder="YY"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-5 col-md-5 pull-right">
                      <div className="form-group">
                        <label htmlFor="cvCode">CV CODE</label>
                        <input
                          type="password"
                          className="form-control"
                          name="cvv"
                          value={this.state.cvv}
                          onChange={this.handleChange}
                          placeholder="CV"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="#">
                  <span className="badge pull-right">
                    <span className="glyphicon glyphicon-usd" />{total}
                  </span>{" "}
                  Final Payment
                </a>
              </li>
            </ul>
            <br />

          <button className="btn btn-success btn-lg btn-block" onClick={this.submit}>    Pay</button>
          <Link to="/confirm">  <button className="btn btn-warning badge">
                <i className="fa fa-angle-left" /> Cancel
              </button>
              </Link>

          </div>
        </div>
      </div>}
</div>

      );
  }
}


function mapStateToProps(state) {
    const {  authentication,cart,alert } = state;
    const { user } = authentication;
    return {
        user,cart,alert
    };
}

const connectedCheckOut = connect(mapStateToProps)(CheckoutForm);
export { connectedCheckOut as CheckoutForm };
