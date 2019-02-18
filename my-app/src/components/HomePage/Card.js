import React from 'react';


export default class Card extends React.Component {

  constructor(props) {
       super(props);


     }
     render() {
       return (
         <div className="container web-align">

         <div id="DIV_1">
	         <b id="B_2">{this.props.title}</b>
         </div>
         <br />
         </div>
       );
     }
}
