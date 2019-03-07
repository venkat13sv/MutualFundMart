import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import { dataService } from '../../_services/data.service.js'

class Schemes extends React.Component {

  constructor(props) {
       super(props);
       this.state={
         items:{},
         isEmpty: false
       }


     }
     componentDidMount(){
       dataService.getAllSchemes().then(
         items=>{this.setState({items: items , isEmpty: true });}
       );

    //  console.log("this state" + JSON.stringify(this.state));
     }
     render() {
       var   items;
       if(this.state.isEmpty){

         //console.log("State " + JSON.stringify(this.state));
      let items1=this.state.items;
    //   items=items1.map(function(item){
      for(let i=0;i<items1.length;i+=4){
      return(
        <div className="col 13" style={{"display":"inline-block"}}>
          <div className="container web-align" style={{"display":"inline-block"}}>
            <Card style={{"float":"left"}} title={items1[i].sname}></Card>
            <Card style={{"float":"left"}} title={items1[i+1].sname}></Card>
            <Card  style={{"float":"left"}}title={items1[i+2].sname}></Card>
          </div>
        </div>
        )
      }
  //   });
     }
       return (

         <div>
         <div className="banner1" style={{'background':'url('+'../images/categories.jpg'+')'}}></div>
         <h3 className="w3l_header w3_agileits_heade">List of all Mutual Funds Categories</h3>

         {items}
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
