import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { store } from '../_helpers';
import { adminActions } from './admin.actions.js';
import { history } from '../_helpers/history.js';


class AdminPanel extends React.Component {
constructor(props) {
  super(props);
  if(!this.props.admin)
   window.location=("/admin");

   this.state = {
       scheme:
       {
       sname: '',
       cname: '',
       category:'yfg',
       iamount:'',
       description:''
        },
       submitted: false
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}
logOutHandler=(e)=>{
  this.props.dispatch(adminActions.logout);
   window.location=("/admin");
}
handleChange(event) {
  const { name, value } = event.target;
  const { scheme } = this.state;
  this.setState({
      scheme: {
          ...scheme,
          [name]: value
      }
  });
}

handleSubmit(e) {
  e.preventDefault();

  this.setState({ submitted: true });
  const { scheme } = this.state;
  const { dispatch } = this.props;
    console.log("Code Ok");
  if (scheme.sname) {
      dispatch(adminActions.addNewScheme(scheme));
   //  console.log("Code Ok");
  }

}

render() {
  const {admin,alert}=this.props;
  const { scheme,submitted }= this.state;
  return (

  <div>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#" style={{"color":"#ffffffd4"}}>Funding Admin Panel</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">All</a></li>
        <li><a href="#"></a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span>{admin.aname}</a></li>
        <li><a href="#" onClick={e=>this.logOutHandler(e)}><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
      </ul>
    </div>
  </nav>


<div>
<h2>Adding New Scheme</h2>
  {submitted&&<p>{alert.message}</p>}
  <form className="form-horizontal" onSubmit={this.handleSubmit}>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">Sheme Name:</label>
      <div className="col-sm-5">
        <input type="text" className="form-control" id="sname" placeholder="Scheme Name" name="sname" value={scheme.sname} onChange={this.handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">Company:</label>
      <div className="col-sm-5">
        <input type="text" className="form-control" id="cname" placeholder="Company Name" name="cname" value={scheme.cname} onChange={this.handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="sel1">Select category:</label>
        <div className="col-sm-5">
        <select className="form-control" id="sel1">
          <option>Equity</option>
          <option>Tax saving</option>
          <option>Long term</option>
          <option>Debt</option>
        </select>
        </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="amount">Initial amount:  ₹</label>
      <div className="col-sm-5">
         <input type="text" className="form-control" id="cname" placeholder="Company Name" name="iamount" value={scheme.iamount} onChange={this.handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email" >Description :</label>
      <div className="col-sm-5">
        <textarea className=" form-control span6" rows="3" placeholder="Write about the scheme" name="description" value={scheme.description}  onChange={this.handleChange} />
      </div>
    </div>

    <div className="form-group">
      <div className="col-sm-offset-2 col-sm-10">
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

    const {  adminReducers,alert } = state;
    const { admin } = adminReducers;
    return {
           admin,alert
    };
}
const connectedAdminPanel = connect(mapStateToProps)(AdminPanel);
export { connectedAdminPanel as AdminPanel };
