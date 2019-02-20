import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import { ContactUsForm } from './ContactUsForm.js'
class ContactUs extends Component {
  render() {
    return (


      <div className="App">
      <Navigation></Navigation>
      <div class="team">
		    <div class="container">
		        <h3 class="w3l_header w3_agileits_header">Contact <span>Us</span></h3>
		            <p class="sub_para_agile">Add Some Short Description</p>
                  <ContactUsForm></ContactUsForm>
        </div>
        </div>

      <Footer></Footer>
      </div>

    );
  }
}

export default ContactUs;
