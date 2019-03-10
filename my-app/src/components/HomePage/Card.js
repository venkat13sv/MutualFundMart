import React from 'react';


export default class Card extends React.Component {

  constructor(props) {
       super(props);


     }
     render() {
       return (
         <div className="container web-align" style={{"width": "180px","margin-left": "0px","margin-right": "200px"
}}>

         <div id="DIV_1">
	         <b id="B_2">{this.props.title}</b>
         </div>
         <br />
         </div>
       );
     }
}
