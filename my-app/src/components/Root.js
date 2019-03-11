import React from 'react';
import { Router, Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App.js';
import { store } from '../_helpers';
import { history } from '../_helpers';
import {HomePage} from '../components/HomePage/HomePage';
import {SignIn} from './MainPage/SignIn.js';
import {SignUp} from './MainPage/SignUp.js';
import ContactUs from './MainPage/ContactUs.js';
//import { PrivateRoute } from './PrivateRoute/PrivateRoute.js';
import { Admin }  from '../Admin/Admin.js';
import { AdminPanel } from '../Admin/AdminPanel.js';
import {CardView} from '../components/HomePage/CardView.js';

const Root=()=>(

  <Router history={history}>
         <div><Provider store={store}>
                       <Switch>
                           <Route exact path="/" component={App} />
                           <Route exact path="/login" component={SignIn} />
                           <Route exact path="/register" component={SignUp} />
                           <Route exact path="/home" component={HomePage} />
                           <Route exact path="/contact" component={ContactUs} />
                           <Route exact path="/admin/panel" component={AdminPanel}/>
                           <Route exact path="/admin" component={Admin}/>
                           <Route exact path="/schemes/view/:id" component={CardView}/>

                       </Switch>
                       </Provider>
                       </div>
                   </Router>

)

export default Root;
