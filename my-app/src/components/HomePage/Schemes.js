import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card.js'

class Schemes extends React.Component {

  constructor(props) {
       super(props);


     }
     render() {
    //   const items=this.state.list1.map(function(item){
    //      <div className="col 13"><Card title={item.title}></Card></div>
    //   });
       return (

         <div>
         <div className="banner1" style={{'background':'url('+'../images/categories.jpg'+')'}}></div>
         <h3 className="w3l_header w3_agileits_heade">List of all Mutual Funds Categories</h3>


         </div>

         );
    }

}

function mapStateToProps(state) {
    const {  authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(Schemes);
export { connectedHomePage as Schemes };
