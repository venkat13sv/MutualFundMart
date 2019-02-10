import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import  {userActions}   from '../../_actions/user.actions.js';
export default class SignIn extends React.Component {
  constructor(props) {
       super(props);

       // reset login status
    //   this.props.dispatch(userActions.logout());
console.log("Props"+ JSON.stringify(this.props));
       this.state = {
           username: '',
           password: '',
           submitted: false
       };

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
       const { name, value } = e.target;
       this.setState({ [name]: value });
   }

   handleSubmit(e) {
       e.preventDefault();

       this.setState({ submitted: true });
       const { username, password } = this.state;
       const { dispatch } = this.props;
       if (username && password) {
           dispatch(userActions.login(username, password));
       }
   }
    render() {
      const { loggingIn } = this.props;
      const { username, password, submitted } = this.state;
        return (
          <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog">
                                      <div className="modal-dialog">

                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>

                                            <div className="signin-form profile">
                                            <h3 className="agileinfo_sign">Sign In</h3>
                                                <div className="login-form">
                                                  <form action="#" method="post">
                                                    <input type="email" name="email" placeholder="E-mail" required="" />
                                                    <input type="password" name="password" placeholder="Password" required="" />
                                                    <div className="tp">
                                                      <input type="submit" value="Sign In" />
                                                    </div>
                                                  </form>
                                                </div>
                                                <div className="login-social-grids">
                                                  <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                                  </ul>
                                                </div>
                                                <p><a href="#" data-toggle="modal" data-target="#myModal3" > Don't have an account?</a></p>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

        );
      }
}
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
  loggingIn
  };
}
const connectedLoginPage = connect(mapStateToProps)(SignIn);
export { connectedLoginPage as SignIn };
