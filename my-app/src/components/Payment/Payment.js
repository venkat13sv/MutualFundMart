import React, {Component} from 'react';
import { connect } from 'react-redux';


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit

console.log(JSON.stringify(this.props.cart));

//  if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    const total=localStorage.getItem('total');
    return (
      <div style={{"width":"800px","paddingTop":"100px","paddingLeft":"500px"}}>
      <h1 style={{"paddingLeft":"15px","paddingBottom":"30px"}}>Payment Page</h1>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Payment Details</h3>
                <div className="checkbox pull-right">
                  <label>
                    <input type="checkbox" />
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
                        id="cardNumber"
                        placeholder="Valid Card Number"
                        required
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
                            id="expityMonth"
                            placeholder="MM"
                            required
                          />
                        </div>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            id="expityYear"
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
                          id="cvCode"
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

          </div>
        </div>
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

const connectedCheckOut = connect(mapStateToProps)(CheckoutForm);
export { connectedCheckOut as CheckoutForm };
