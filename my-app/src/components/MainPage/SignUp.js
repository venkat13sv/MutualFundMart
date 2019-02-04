import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '/_actions';

export default class SignUp extends React.Component {

  constructor(props) {
       super(props);

       // reset login status
       this.props.dispatch(userActions.logout());

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

<div>
    													<div className="modal fade" id="myModal3" tabindex="-1" role="dialog">
    														<div className="modal-dialog">

    															<div className="modal-content">
    																<div className="modal-header">
    																	<button type="button" className="close" data-dismiss="modal">&times;</button>

    																	<div className="signin-form profile">
    																	<h3 className="agileinfo_sign">Sign Up</h3>
    																			<div className="login-form">
    																				<form action="#" method="post"  onSubmit={this.handleSubmit}>


    																				  <input type="text" name="name" placeholder="Username" required="" value={username} onChange={this.handleChange}/>
    																					<input type="email" name="email" placeholder="Email" required="" value={password} onChange={this.handleChange}  />
    																					<input type="password" name="password" placeholder="Password" required="" />
    																					<input type="password" name="password" placeholder="Confirm Password" required="" />
    																					<input type="submit" value="Sign Up" />
    																				</form>
    																			</div>
    																			<p><a href="#"> By clicking register, I agree to your terms</a></p>
    																		</div>
    																</div>
    															</div>
    														</div>
    													</div>

         </div>
       );
              }
       }
