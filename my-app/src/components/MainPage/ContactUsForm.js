import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import  {userActions}   from '../../_actions/user.actions.js';
import {dataService} from '../../_services/data.service.js';
class ContactUsForm extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
           name: '',
           email: '',
           subject:'',
           type:'FeedBack',
           message:'',
           submitted: false,
           displayMessage:''
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

       this.setState({ submitted: true,displayMessage:"Submitting your message" });
       let {submitted,displayMessage,...feed}=this.state;
       console.log(JSON.stringify(feed));
       dataService.sendFeedBack(feed).then(
         message=>{this.setState({"displayMessage":message})}
       );


   }
    render() {
      const { user } = this.props;
      console.log("State:"+ user)
      
      const { name,email,type,subject,message } = this.state;
        return (
          <div className="agile_team_grids_top">
  				<div className="col-md-6 agileinfo_mail_grid_left">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="email">Name:</label>
              <div className="col-xl-5">
                <input type="text" className="form-control" id="name" placeholder="Your Name" name="name" value={name} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="email">Email:</label>
              <div className="col-xl-5">
                <input type="text" className="form-control" id="cname" placeholder="Your Email" name="email" value={email} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="sel1">Category:</label>
                <div className="col-xl-5">
                <select className="form-control" name="type" value={type} onChange={this.handleChange} id="sel1">
                  <option>FeedBack</option>
                  <option>Query</option>

                </select>
                </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="amount">Subject</label>
              <div className="col-xl-5">
                 <input type="text" className="form-control" id="cname" placeholder="Subject" name="subject" value={subject} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="email" >Description :</label>
              <div className="col-xl-5">
                <textarea className=" form-control span6" rows="3" placeholder="Write your message" name="message" value={message}  onChange={this.handleChange} />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-30">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
  				</div>
      </div>

        );
      }
}
function mapStateToProps(state) {
  const {loggedIn}=state.authentication;
  const {user}=state;
  return user;

}
const connectedLoginPage = connect(mapStateToProps)(ContactUsForm);
export  { connectedLoginPage as ContactUsForm };
