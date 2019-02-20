import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class AdminPanel extends React.Component {
constructor(props) {
  super(props);
  console.log(this.props)
}
handleChange(e) {

}

handleSubmit(e) {

}
render() {
  const {admin}=this.props;
return (

  <div>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#" style={{"color":"#ffffffd4"}}>Funding Admin Panel</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> </a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
      </ul>
    </div>
  </nav>


<div>
<h2>Adding New Scheme</h2>

  <form className="form-horizontal" action="/action_page.php">
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">Sheme Name:</label>
      <div className="col-sm-5">
        <input type="text" className="form-control" id="sname" placeholder="Scheme Name" name="sname" />
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">Company:</label>
      <div className="col-sm-5">
        <input type="text" className="form-control" id="cname" placeholder="Company Name" name="cname" />
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
    console.log("state "+ JSON.stringify(state));
    const {  adminReducers } = state;
    const { admin } = adminReducers;
    return {
           admin
    };
}
const connectedAdminPanel = connect(mapStateToProps)(AdminPanel);
export { connectedAdminPanel as AdminPanel };
