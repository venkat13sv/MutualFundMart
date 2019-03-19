import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../_helpers/store.js';
import  {adminActions}   from './admin.actions.js';

class Admin extends React.Component {
  constructor(props) {
       super(props);

       // reset login status
       this.props.dispatch(adminActions.logout());
       this.state = {
           adminname: '',
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
       const { adminname, password } = this.state;
       const { dispatch } = this.props;
       if (adminname && password) {
           dispatch(adminActions.login(adminname, password));

       }
      // console.log("Log store "+ JSON.stringify(store.getState()));
   }
    render() {
      const { loggingIn } = this.props;

      const { adminname, password, submitted } = this.state;
        return (
          <div>
                                      <div className="modal-dialog">

                                        <div className="modal-content">
                                          <div className="modal-header">

                                            <div className="signin-form profile">
                                            <h3 className="agileinfo_sign">Admin Login</h3>
                                            {submitted&&alert.type=="alert-danger"&& <p style={{color:"red"}}>{alert.message}</p>}
                                                <div className="login-form">
                                                  <form action="#" method="post" onSubmit={this.handleSubmit}>

                                                    <input type="text" name="adminname" placeholder="Admin username" value={adminname}  onChange={this.handleChange} required="" />
                                                    <input type="password" name="password" placeholder="Password" value={password}  onChange={this.handleChange} required="" />
                                                    <div className="tp">
                                                      <input type="submit"  value="Login" />
                                                    </div>
                                                  </form>
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
  const {alert}=state;
  const { loggingIn } = state.adminReducers;
  return {
  loggingIn
  };
}
const connectedAdminLoginPage = connect(mapStateToProps)(Admin);
export { connectedAdminLoginPage as Admin };
