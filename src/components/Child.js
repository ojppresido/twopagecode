import React from 'react'
import Welcome from './Welcome';
import Page from '../pages/Page';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
// import Process from './Process';

const Child = ({category, product, click,   order, myState, myLga, myWard}) => {

     if(product.rep && product.rep===myLga.rep && category===myState && product.senate===myLga.senate){
        return  <section className='section'>
        <div className='section-title'>
        <Welcome  category={category} product={product}
    order={order} myLga={myLga} click={click}
    myState={myState}  myWard={myWard}/>
    
        </div>
        <div className='cocktail-center'>
     <Page1 category={category} product={product}
    order={order} myLga={myLga} click={click}
    myState={myState}  myWard={myWard}
/>
</div>
</section>
        
      
      }
     if(product.rep===myLga.rep && category===myState && product.senate===myLga.senate && order.rep ===0){
        return <section className='section'>
            <div className='section-title'>
            <Welcome  category={category} product={product}
        order={order} myLga={myLga} click={click}
        myState={myState}  myWard={myWard}/>

            </div>
        <div className='cocktail-center'>
     <Page2 category={category} product={product}
    order={order} myLga={myLga} click={click}
    myState={myState}  myWard={myWard}
/>
</div>
</section>
      }
      if(order.rep  && order.rep===myWard.rep && category===myState && product===myLga && product.senate===myLga.senate){
        return <section className='section'>
            <div className='section-title'>
            <Welcome  category={category} product={product}
        order={order} myLga={myLga} click={click}
        myState={myState}  myWard={myWard}/>

            </div>
        <div className='cocktail-center'>
     <Page5 category={category} product={product}
    order={order} myLga={myLga} click={click}
    myState={myState}  myWard={myWard}
/>
</div>
</section>
      }
      if(order.rep  && order.rep!==myWard.rep && category===myState && product===myLga && product.senate===myLga.senate){
        return <section className='section'>
            <div className='section-title'>
            <Welcome  category={category} product={product}
        order={order} myLga={myLga} click={click}
        myState={myState}  myWard={myWard}/>

            </div>
        <div className='cocktail-center'>
     <Page3 category={category} product={product}
    order={order} myLga={myLga} click={click}
    myState={myState}  myWard={myWard}
/>
</div>
</section>
      }
      if(product.senate===myLga.senate && category===myState && order!==myWard ){
        return<section className='section'>
        <div className='section-title'>
        <Welcome  category={category} product={product}
        order={order} myLga={myLga} click={click}
        myState={myState}  myWard={myWard}/>

        </div>
    <div className='cocktail-center'>
 <Page3 category={category} product={product}
order={order} myLga={myLga} click={click}
myState={myState}  myWard={myWard}
/>
</div>
</section>
        
       
      }
      if(category===myState && product!==myLga && order!==myWard){
        return<section className='section'>
        <div className='section-title'>
        <Welcome category={category} product={product}
        order={order} myLga={myLga} click={click}
        myState={myState}  myWard={myWard} />

        </div>
    <div className='cocktail-center'>
 <Page4 category={category} product={product}
order={order} myLga={myLga} click={click}
myState={myState}  myWard={myWard}
/>
</div>
</section>
        
      
      }
      return <>
  <section className='section'>
        <div className='section-title'>
        <Welcome category={category} product={product}
        order={order} myLga={myLga} click={click}
        myState={myState}  myWard={myWard} />

        </div>
    <div className='cocktail-center'>
 <Page category={category} product={product}
order={order} myLga={myLga} click={click}
myState={myState}  myWard={myWard}
/>
</div>
</section>    
  
    
</>;
  
}

export default Child
