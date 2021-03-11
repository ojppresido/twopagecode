
import React from 'react'
import { DropDownList } from "@progress/kendo-react-dropdowns";
import '@progress/kendo-theme-default/dist/all.css';
import {State} from '../data/States';



const Form = ({defaultItemCategory, category, hasCategory, defaultItemProduct,
            product, hasProduct, defaultItemOrder, order, click,
            defaultItemCategory2, defaultItemProduct2, defaultItemOrder2,
            defaultItemCategory3, myState, hasState, defaultItemProduct3,
            myLga, hasLga, defaultItemOrder3, myWard, categoryChange,
            productChange, productData, productRef, orderChange, orderData,
            orderRef, myStateChange, myLgaChange, myWardChange,
            myLgaData, myWardData, myLgaRef, myWardRef,
}) => {
    return (
        <div style={{backgroundColor:'lemonchiffon'}}>
        
     <div style={{ marginLeft:'1rem'}}> 
         <div >
            <div style={{marginBottom:'0px', backgroundColor:'lemonchiffon'}}>
              <h2 style={{color:'green'}}>Please Enter Your Present Location</h2>
            </div>
          <div style={{ display: "inline-block" }}>
          <div>
            <DropDownList 
              data={State}
              textField="stateName"
              onChange={myStateChange}
              defaultItem={defaultItemCategory3}
              value={myState}
            style={{width:'6rem'}}

              />
          </div>
          </div>
          <div style={{ display: "inline-block", marginLeft: "10px" }}>
          <br />
          <DropDownList
            disabled={!hasState}
            data={myLgaData}
            textField="lgaName"
            onChange={myLgaChange}
            defaultItem={defaultItemProduct3}
            value={myLga}
            ref={myLgaRef}
            style={{width:'6rem'}}

            />
        </div>

        <div style={{ display: "inline-block", marginLeft: "8px" }}>
          <br />
          <DropDownList
            disabled={!hasLga}
            data={myWardData}
            textField="wardName"
            onChange={myWardChange}
            defaultItem={defaultItemOrder3}
            value={myWard}
            ref={myWardRef}
            style={{width:'6rem'}}

            />
        </div>
        </div>
          </div> 
<br></br>
<div style={{marginTop:'50px', backgroundColor:'pink', height:'250px'}}>
<div style={{ marginLeft:'1rem'}}>

<br />
<h2 style={{color:'brown'}}>Please Enter Code From Your Card</h2>


<div style={{backgroundColor:''}}>
        <div style={{ display: "inline-block", }}>
          Code:27/**/**/***
          <br />
          <br />
          <DropDownList
            data={State}
            textField="stateId"
            onChange={categoryChange} 
            defaultItem={defaultItemCategory}
            value={category}
            style={{width:'6rem'}}
          />
          
        </div>
  
        <div style={{ display: "inline-block", marginLeft: "-14px", }}>
          
          <DropDownList
            disabled={!hasCategory}
            data={productData}
            textField="lgaId"
            onChange={productChange}
            defaultItem={defaultItemProduct}
            value={product}
            ref={productRef}
            style={{width:'6rem'}}
            />
        </div>
        <div style={{ display: "inline-block", marginLeft: "9px", }}>
          
          <DropDownList
            disabled={!hasProduct}
            data={orderData}
            textField="wardId"
            onChange={orderChange}
            defaultItem={defaultItemOrder}
            value={order}
            ref={orderRef}
            style={{width:'6rem'}}
            />
        </div>
        
          <div>
          <div style={{ display: "inline-block" }}>
          <div>
            <DropDownList 
              data={State}
              textField="stateName"
              onChange={categoryChange}
              defaultItem={defaultItemCategory2}
              value={category}
              style={{width:'6rem'}}
              />
          </div>
          </div>
          <div style={{ display: "inline-block", marginLeft: "10px" }}>
          <br />
          <DropDownList
            disabled={!hasCategory}
            data={productData}
            textField="lgaName"
            onChange={productChange}
            defaultItem={defaultItemProduct2}
            value={product}
            ref={productRef}
            style={{width:'6rem'}}
            />
        </div>

        <div style={{ display: "inline-block", marginLeft: "9px" }}>
          <br />
          <DropDownList
            disabled={!hasProduct}
            data={orderData}
            textField = 'wardName'
            onChange={orderChange}
            defaultItem={defaultItemOrder2}
            value={order}
            ref={orderRef}
            style={{width:'6rem'}}
            />
        </div>

          </div> 
          </div>
          </div>
      </div>

{/* <Process category={category} product={product}
       order={order} myLga={myLga}
       myState={myState}  myWard={myWard} click={click}/> */}
     
</div>

            )
        }
        
        export default Form