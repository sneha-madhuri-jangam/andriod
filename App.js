import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import {Component, useState} from'react';
import TestEffect from './TestEffect';
import ProductCards from './ProductCards';


//api call(app.js and productcards.js)
function App(){
  var[products,updateProducts]=useState([])

  useEffect(
    ()=>{
      getProducts()
    },[]
  )
  async function getProducts(){
    let res=await fetch("https://fakestoreapi.com/products");
    let productlist=await res.json();

    updateProducts(productlist);
    console.log(productlist);
  }


  if(products.length == 0){
    return (<h1>Fetching data ....</h1>)
  }
  return(
    // <h1>product List</h1>
    //products.map((p)=><ProductCards name={p.title} price={p.price}></ProductCards>)
    

    <>
     {/* <img src="/r.jpg"/> */}
    <div className='product-list'>
      {
        products.map((p)=><ProductCards{...p} key={p.id}></ProductCards>)
      }
    </div>
    
    </>
 
 
  )

}


// function App(){
// return(
//   <TestEffect></TestEffect>
// )
// }









// //using class component we defined the state using set state{this.sate.variable}

// class App extends Component {
//   state = {
//     counter: 0
//   }

//   render() {
//     return (
//       <>
//         <h1>Counter value: {this.state.counter}</h1>
//         <button onClick={() => {
//           this.setState({
//             counter: this.state.counter + 1
//           });
//         }}>
//           CHANGE
//         </button>
//       </>
//     );
//   }
// }

// class App extends Component{
//   state={
//     product_name : "Thar ZEEP",
//     price : 2000
    
//   }
//   constructor(){
//     super();
//     this.updatePrice=this.updatePrice.bind(this);

//   }
//   render(){
//     return(<>
//     <h1>the product is {this.state.product_name} and price is {this.state.price}</h1>
    
//       <input id="price" type="number"/>
//       <button  onClick={this.updatePrice}
       
        
//     >CHANGE</button>

    
    
//     </>
//     );
//   }
//   updatePrice(){
//     let p=document.getElementById("price").value;
//     this.setState({
//       price:p
//     })
//   }
// }








//function component-state,usestate;
// function App() {
//   let [counter,updateR]=useState(0);
//   return (
//     <div className="App">
//       <h1>counter value : {counter}</h1>
//       <button  onClick={()=>{
//         updateR(++counter);
//       }}>CHANGE</button>

//     </div>
//   );
// }

export default App;
