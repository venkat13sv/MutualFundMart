import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import  {userActions}   from '../../_actions/user.actions.js';


class SignUp extends React.Component {
  constructor(props) {
         super(props);

         this.state = {
             user: {
                 firstName: '',
                 lastName: '',
                 email:'',
                 username: '',
                 password: ''
             },
             submitted: false
         };

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         const { name, value } = event.target;
         const { user } = this.state;
         this.setState({
             user: {
                 ...user,
                 [name]: value
             }
         });
     }

     handleSubmit(event) {
         event.preventDefault();

         this.setState({ submitted: true });
         const { user } = this.state;
         const { dispatch } = this.props;
           console.log("Code Ok");
         if (user.firstName && user.lastName  &&  user.password) {
            // dispatch(userActions.register(user));
            console.log("Code Ok");
         }
     }

    render() {
              const { registering  } = this.props;
              const { user, submitted } = this.state;
        return (

<div>
    													<div className="modal fade" id="myModal3" tabIndex="-1" role="dialog">
    														<div className="modal-dialog">

    															<div className="modal-content">
    																<div className="modal-header">
    																	<button type="button" className="close" data-dismiss="modal">&times;</button>

    																	<div className="signin-form profile">
    																	<h3 className="agileinfo_sign">Sign Up</h3>
    																			<div className="login-form">
    																				<form action="#" method="post"  onSubmit={this.handleSubmit}>


    																				  <input type="text" name="firstName" placeholder="Firstname" required="" value={ user.firstName } onChange={this.handleChange} />
                                              <input type="text" name="lastName" placeholder="LastName" required="" value={ user.lastName } onChange={this.handleChange} />
    																					<input type="email" name="email" placeholder="Email" required="" value={user.email} onChange={this.handleChange}  />
    																					<input type="password" name="password" placeholder="Password" required="" value={user.password} onChange={this.handleChange} />
    																					<input type="password" name="cpassword" placeholder="Confirm Password" required="" />
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
function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(SignUp);
export { connectedRegisterPage as SignUp };
