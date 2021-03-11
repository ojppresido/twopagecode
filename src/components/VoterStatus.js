
import React from "react"
import '@progress/kendo-theme-default/dist/all.css';
import {Lga} from '../data/LGA';
import {Ward} from '../data/Ward'
import Form from '../components/Form';
import Child from './Child'

const defaultItemCategory = { stateId: "State Code ..." };
const defaultItemProduct = { lgaId: "LGA Code ..." };
const defaultItemOrder = { wardId: "Ward Code ..." };

const defaultItemCategory2 = { stateName: "State of Registration..." };
const defaultItemProduct2 = { lgaName: "LGA of Registration..." };
const defaultItemOrder2 = { wardName: "Ward of Registration ..." };

const defaultItemCategory3 = { stateName: "Present State ..." };
const defaultItemProduct3 = { lgaName: "Present LGA..." };
const defaultItemOrder3 = { wardName: "Present Ward..." };

export default class AppComponent extends React.Component {
  state = {
    
    category: null,
    product: null,
    order: null,
    orders: Ward,
    products: Lga,
    loading:true,


    myState: null,
    myLga: null,
    myWard: null,
    myWards: Ward,
    myLgas: Lga,
    click:true
  };

  constructor(props) {
    super(props);

    this.productsRef = React.createRef();
    this.ordersRef = React.createRef();
    this.myLgasRef = React.createRef();
    this.myWardsRef = React.createRef();
  }

  categoryChange = event => {
    const category = event.target.value;
    const products = Lga.filter(
      product => product.stateId === category.stateId
    );

    setTimeout(() => this.productsRef.current.focus());

    this.setState({
      category: category,
      products: products,
      product: null,
      order: null,
    });
  };
  myStateChange = event => {
    const category = event.target.value;
    const products = Lga.filter(
      product => product.stateId === category.stateId
    );

    setTimeout(() => this.productsRef.current.focus());

    this.setState({
      myState: category,
      myLgas: products,
      myLga: null,
      myWard: null,
    });
  };


  productChange = event => {
    const product = event.target.value;
    const orders = Ward.filter(
      order => order.lgaId === product.lgaId && order.stateId === product.stateId    );

    setTimeout(() => this.ordersRef.current.focus());

    this.setState({
      product: product,
      orders: orders,
      order: null,
    });
  };
  myLgaChange = event => {
    const product = event.target.value;
    const orders = Ward.filter(
      order => order.lgaId === product.lgaId && order.stateId === product.stateId    );

    setTimeout(() => this.ordersRef.current.focus());

    this.setState({
      myLga: product,
      myWards: orders,
      myWard: null,
    });
  };

  orderChange = event => {
    this.setState({ order: event.target.value });
  };
  myWardChange = event => {
    this.setState({ myWard: event.target.value });
  };

click = ()=>{
  this.setState({click:true})
}

  render() {
    const category = this.state.category;
    const product = this.state.product;
    const order = this.state.order;
    const myState = this.state.myState;
    const myLga = this.state.myLga;
    const myWard = this.state.myWard;
    const click = this.state.click;
    const loading = this.state.loading;
    
    
    

    const hasCategory = category && category !== defaultItemCategory;
    const hasProduct = product && product !== defaultItemProduct;
    const hasState = myState && myState !== defaultItemCategory;
    const hasLga = myLga && myLga !== defaultItemProduct;

    if(loading){
      return <>
      < Form  
        defaultItemCategory={defaultItemCategory}
        category={category}
        hasCategory={hasCategory}
        defaultItemProduct={defaultItemProduct}
        product={product}
        hasProduct={hasProduct}
        defaultItemOrder={defaultItemOrder}
        order={order}

        defaultItemCategory2={defaultItemCategory2}
        defaultItemProduct2={defaultItemProduct2}
        defaultItemOrder2={defaultItemOrder2}

        defaultItemCategory3={defaultItemCategory3}
        myState={myState}
        hasState={hasState}
        defaultItemProduct3={defaultItemProduct3}
        myLga={myLga}
        hasLga={hasLga}
        defaultItemOrder3={defaultItemOrder3}
        myWard={myWard}

        categoryChange={this.categoryChange}
        productChange={this.productChange}
        productData={this.state.products}
        productRef={this.productsRef}

        orderChange={this.orderChange}
        orderData={this.state.orders}
        orderRef={this.ordersRef}

        myStateChange={this.myStateChange}
        myLgaChange={this.myLgaChange}
        myWardChange={this.myWardChange}
        myStateData={this.state.myState}
        myWardData={this.state.myWards}
        myLgaData={this.state.myLgas}
        myLgaRef={this.myLgasRef}
        myWardRef={this.myWardsRef}

    />
{/* 
          <div style={{marginTop:'0px', backgroundColor:'purple', height:'200px'}}>
          <center>
         <button  
         onClick={()=>this.setState({loading:false})}
         
         className='btn-primary' style={{marginTop:'80px'}}>Submit Details</button>
         </center>
         </div>  */}

         <div style={{marginTop:'0px', backgroundColor:'purple', height:'200px'}}>
      <center>
     <button  
     
     onClick={()=>this.setState({loading:false})}
     
     className='btn-primary' style={{marginTop:'80px'}}>Back Home</button>
     </center>
     </div>      
      
</>
    }
if(category && product && order && myState && myLga && myWard  && click && !loading)    {
    
  return  <>  
   {/* <div style={{marginTop:'0px', backgroundColor:'purple', height:'200px'}}>
      <center>
     <button  
     
     onClick={()=>this.setState({click:true})}
     onClick={()=>this.setState({loading:false})}
     
     className='btn-primary' style={{marginTop:'80px'}}>Back Home</button>
     </center>
     </div>       */}
  <Child category={category} product={product}
   order={order} myLga={myLga}
   myState={myState}  myWard={myWard} click={click}
   />
    

   </>
}
  
    return<h4>Good</h4>

}
}
