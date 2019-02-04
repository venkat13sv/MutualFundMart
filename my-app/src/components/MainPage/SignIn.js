import React from 'react';
export default class SignIn extends React.Component {
    render() {
        return (
          <div className="modal fade" id="myModal2" tabindex="-1" role="dialog">
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
