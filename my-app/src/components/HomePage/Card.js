import React from 'react';


export default class Card extends React.Component {

  constructor(props) {
       super(props);


     }
     render() {
       return (


         <div id="DIV_1">
	         <b id="B_2">{this.props.title}</b>
          <br />
         </div>

         
       );
     }
}
