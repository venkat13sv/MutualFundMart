import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import  {userActions}   from '../../_actions/user.actions.js';
class ContactUsForm extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
           name: '',
           email: '',
           subject:'',
           message:'',
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
      const { name,email,subject,message } = this.state;
        return (
          <div className="agile_team_grids_top">
  				<div className="col-md-6 agileinfo_mail_grid_left">
  					<form action="#" method="post" onSubmit={this.handleSubmit}>
  						<span className="input input--nariko">
  							<input className="input__field input__field--nariko" name="name" value={name} type="text" id="input-20" placeholder="Your Name" onChange={this.handleChange} required="" />
  							<label className="input__label input__label--nariko" for="input-20">
  								<span className="input__label-content input__label-content--nariko">Your Name</span>
  							</label>
  						</span>
  						<span className="input input--nariko">
  							<input className="input__field input__field--nariko" name="email" value={email} type="email" id="input-21" placeholder=" " onChange={this.handleChange} required="" />
  							<label className="input__label input__label--nariko" for="input-21" >
  								<span className="input__label-content input__label-content--nariko">Your Email</span>
  							</label>
  						</span>
  						<span className="input input--nariko">
  							<input className="input__field input__field--nariko" name="subject" value={subject} type="text" id="input-22" placeholder=" " onChange={this.handleChange} required="" />
  							<label className="input__label input__label--nariko" for="input-22">
  								<span className="input__label-content input__label-content--nariko">Your Subject</span>
  							</label>
  						</span>
  						<textarea name="message" placeholder="Your Message..." value={message} onChange={this.handleChange} required=""></textarea>
  						<input type="submit" />
  					</form>
  				</div>
      </div>

        );
      }
}
function mapStateToProps(state) {

}
const connectedLoginPage = connect(mapStateToProps)(ContactUsForm);
export  { connectedLoginPage as ContactUsForm };
