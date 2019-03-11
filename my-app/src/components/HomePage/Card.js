import React from 'react';


export default class Card extends React.Component {

  constructor(props) {
       super(props);


     }
     render() {
       return (
         <div className="container web-align" style={{"width": "180px","margin-left": "0px","marginRight": "200px"}}>

         <div id="DIV_1" style={{"width": "300px","height":"300px"}}>
         <table>
         <tbody>
	      <tr><td style={{"paddingLeft":"20px"}}>{this.props.title}</td></tr>

        <tr> <td style={{"paddingLeft":"20px"}}><p style={{"color":"black"}}>SIP: {this.props.item.iamount}</p></td><td style={{"paddingRight":"20px"}}>Returns: 3Y 9.57%</td></tr>

         </tbody>
         </table>
         </div>
         <br />

         </div>
       );
     }
}
