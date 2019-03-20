import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { store } from '../_helpers';
import { adminActions } from './admin.actions.js';
import { history } from '../_helpers/history.js';
import {adminService } from './admin.service.js';


class AllUsers extends React.Component {
constructor(props) {
  super(props);
  if(!this.props.admin)
   window.location=("/admin");

   this.state = {
       users:{},
       isEmpty:true
   };


}
logOutHandler=(e)=>{
  this.props.dispatch(adminActions.logout);
   window.location=("/admin");
}
componentDidMount(){
  adminService.getAllUsers().then(
    users => {this.setState({users:users,isEmpty:false})}
  );

}

render() {
  const {admin,alert}=this.props;
  const { scheme,submitted }= this.state;
  if(!this.state.isEmpty)
  var usersNodes = this.state.users.map(user => {

      return (


      <tr><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.email}</td><td>{user.createdDate}</td><td>{user.isVerified}</td></tr>


      );
    });
  return (

  <div>
  <div className="header">

<div className="w3layouts_header_right">
<div className="agileits-social top_content">
   <ul className="nav navbar-nav">
    <li> <h1><a className="navbar-brand" href="index.html"><span>F</span>unding</a></h1></li>
       <li>  <a className="navbar-brand" href="#" style={{"color":"#ffffffd4"}}>Admin Panel</a></li>

     </ul>
 </div>
</div>
<div className="w3layouts_header_left">
<ul>
 <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i> Welcome {admin.aname}</a></li>
 <li>
 </li>
 <li><a href="#" onClick={e=>this.logOutHandler(e)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Log Out</a></li>
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

    </div>

    <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
      <nav className="link-effect-2" id="link-effect-2">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/admin/panel"><span data-hover="Add scheme">Add scheme</span></Link></li>
          <li ><Link to="/admin/panel/users"><span data-hover="All">All</span></Link></li>
          <li><a href="#"><span data-hover="All">All</span></a></li>
          <li><a href="#"><span data-hover=""></span></a></li>

          <li><a href="#"><span data-hover="FeedBack">FeedBack</span></a></li>
        </ul>
      </nav>
    </div>
  </nav>
 </div>


<div>
<h2>All Users</h2>
<table className="table table-striped table-dark">
     <thead>


     <tr>
        <th>Firstname</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Registered Date</th>
        <th>Verified</th>


     </tr>
 </thead>
 <tbody>{usersNodes}</tbody>



 </table>

</div>
</div>

         );
       }
}
function mapStateToProps(state) {

    const {  adminReducers,alert } = state;
    const { admin } = adminReducers;
    return {
           admin,alert
    };
}
const connectedAdminPanel = connect(mapStateToProps)(AllUsers);
export { connectedAdminPanel as AllUsers };
