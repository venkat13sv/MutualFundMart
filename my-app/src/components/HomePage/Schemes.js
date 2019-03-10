import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import { dataService } from '../../_services/data.service.js'

class Schemes extends React.Component {

  constructor(props)
  {
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

    console.log("this state" + JSON.stringify(this.state));
  }
  itemsContent(){
    if(this.state.isEmpty){
    let items1=this.state.items;
    const hcontent=[];
    for(let i=0;i<=items1.length-3;i+=3)
    {
      hcontent.push(
      <tr>
        <td>  <Card style={{"float":"left"}}    title={items1[i].sname}></Card></td>


        <td>  <Card style={{"float":"left"}}  title={items1[i+1].sname}></Card></td>


        <td>  <Card  style={{"float":"left"}} title={items1[i+2].sname}></Card></td>
          </tr>

      );
    }
      console.log("hcontent: "+ hcontent);
      return hcontent;
    }
    }
  render()
  {






      return (

         <div>
         <div className="banner1" style={{'background':'url('+'../images/categories.jpg'+')'}}></div>
         <h3 className="w3l_header w3_agileits_heade">List of all Mutual Funds Categories</h3>
        <div style={{ "margin-top": "100px","margin-left": "100px"}}> <table>{this.state.isEmpty&&this.itemsContent()}</table></div>

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
