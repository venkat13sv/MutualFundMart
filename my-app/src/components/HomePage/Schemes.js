import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import { CardView } from './CardView.js';
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
    items=>{
      this.setState({items: items , isEmpty: true });
        console.log("this state" + JSON.stringify(this.state));
  }
       );


  }
  itemsContent(){
    if(this.state.isEmpty){

    let count=0,items1=this.state.items;
    const hcontent=[];
    for(let i=0;i<=items1.length-3;i+=3)
    {
      hcontent.push(
      <tr id={"Row"+i}>
        <td> <Link to={"/schemes/view/"+i}> <Card style={{"float":"left"}}  schemeId={items1[i]._id}  title={items1[i].sname} item={items1[i]}></Card></Link></td>


        <td> <Link to={"/schemes/view/"+(i+1)}> <Card style={{"float":"left"}}  schemeId={items1[i+1]._id} title={items1[i+1].sname} item={items1[i+1]}></Card></Link></td>


        <td> <Link to={"/schemes/view/"+(i+2)}> <Card  style={{"float":"left"}} schemeId={items1[i+1]._id} title={items1[i+2].sname} item={items1[i+2]}></Card></Link></td>
          </tr>

      );
      count+=3;
    }
      console.log("hcontent: "+ count);
        console.log("items1: "+ items1.length);
      let leftItems=items1.length-count;
      if(leftItems)
      {
        let i=count;
        if(items1.length-count==2)
        {
          hcontent.push(
          <tr id={"Row"+i}>
            <td> <Link to={"/schemes/view/"+i}> <Card style={{"float":"left"}}  schemeId={items1[i]._id}  title={items1[i].sname} item={items1[i]}></Card></Link></td>
            {i<items1.length&&  <td> <Link to={"/schemes/view/"+(i+1)}> <Card style={{"float":"left"}}  schemeId={items1[i+1]._id}  title={items1[i+1].sname} item={items1[i+1]}></Card></Link></td>}
            </tr>



        );
        }

      }
      return hcontent;
    }
    }
  render()
  {






      return (

         <div>
         <div className="banner1" style={{'background':'url('+'../images/categories.jpg'+')'}}></div>
         <h3 className="w3l_header w3_agileits_heade">List of all Mutual Funds Categories</h3>
        <div style={{ "marginTop": "100px","marginLeft": "100px"}}> <table><tbody>{this.state.isEmpty&&this.itemsContent()}</tbody></table></div>

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
