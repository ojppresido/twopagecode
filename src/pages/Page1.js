import React from 'react'
import img from '../images/download.jpg';
import sent from '../images/download.png';
import rep from '../images/rep.jpg';
import { Link } from 'react-router-dom'





const Array = ({category, product, order,  click,  myState, myLga, myWard}) => {
    
  const [vote, setVote] = React.useState(false);
  const [vote1, setVote1] = React.useState(false);
  const [vote2, setVote2] = React.useState(false);
  const [vote3, setVote3] = React.useState(false);
  const [vote4, setVote4] = React.useState(false);
    

   const handlePres = ()=>{
    setVote(!vote);
}
const handleGov = ()=>{
  setVote1(!vote1);
}

const handleSen = ()=>{
  setVote2(!vote2);
}
const handleRep = ()=>{
  setVote3(!vote3);
}
const handleAssb = ()=>{
  setVote4(!vote4);
}



  return (
    <>
    {!vote ?
      <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt='mam' />
      </div>
      <div className='cocktail-footer'>
        <h3>Presidential Election</h3>
        <p style={{color:'black'}}><strong>Federal Republic of Nigeria</strong></p>
      <Link to='/vote' className='btn btn-primary btn-details' onClick={handlePres}
      // category={category} product={product}
      // order={order} myLga={myLga} click={click}
      // myState={myState}  myWard={myWard}
      
       >
        Vote
      </Link> 
      </div>
    </article> : 
    <article className='cocktail'>
    <div className='img-container'>
      <img src={category.president} alt='mam' />
    </div>
    <div className='cocktail-footer'>
      <h3 style={{color:'red'}}>Not in Election Year</h3>
      <button className='btn btn-primary btn-details' onClick={handlePres} >
        Back
      </button> 
    </div>
    </article>
    }

{!vote1 ?
      <article className='cocktail'>
      <div className='img-container'>
        <img src={category.img} alt='mam' />
      </div>
      <div className='cocktail-footer'>
        <h3>Governorship Election</h3>
        <p style={{color:'black'}}><strong>{category.stateName}</strong></p>
      <button  className='btn btn-primary btn-details' onClick={handleGov} >
        Vote
      </button> 
      </div>
    </article> : 
    <article className='cocktail'>
    <div className='img-container'>
      <img src={category.gov} alt='mam' />
    </div>
    <div className='cocktail-footer'>
      <h3 style={{color:'red'}}>Not in Election Year</h3>
      <button className='btn btn-primary btn-details' onClick={handleGov} >
        Back
      </button>
    </div>
    </article>
    }

{!vote2 ?
      <article className='cocktail'>
      <div className='img-container'>
        <img src={sent} alt='mam' />
      </div>
      <div className='cocktail-footer'>
        <h3 style={{color:'red'}}>Senatorial Election</h3>
        <p style={{color:'black'}}><strong>{product.senate}</strong></p>
      <Link to='/vote' className='btn btn-primary btn-details' 
      // category={category} product={product}
      // order={order} myLga={myLga} click={click}
      // myState={myState}  myWard={myWard}
      
      onClick={handleSen} >
        Vote
      </Link> 
      </div>
    </article> : 
    // <article className='cocktail'>
    // <div className='img-container'>
    //   <img src={category.senate} alt='mam' />
    // </div>
    // <div className='cocktail-footer'>
    //   <h3 style={{color:'red'}}>Not in Election Year</h3>
    <>
    {/* <Ballot category={category} product={product} order={order} />
      <button className='btn btn-primary btn-details' onClick={handleSen} >
        Back
      </button> */}
     {/* </div>
    </article> */}
    </>
    }

{!vote3 ?
      <article className='cocktail'>
      <div className='img-container'>
        <img src={rep} alt='mam' />
      </div>
      <div className='cocktail-footer'>
      <h3 style={{color:'green'}}>House of Representative Election</h3>
        <p style={{color:'black'}}><strong>{!product.rep  ? order.rep : product.rep}</strong></p>
      <Link to='/vote' className='btn btn-primary btn-details'
      // category={category} product={product}
      // order={order} myLga={myLga} click={click}
      // myState={myState}  myWard={myWard}
      
      onClick={handleRep} >
        Vote
      </Link> 
      </div>
    </article> : 
    // <article className='cocktail'>
    // <div className='img-container'>
    //   <img src={category.rep} alt='mam' />
    // </div>
    // <div className='cocktail-footer'>
    //   <h3 style={{color:'red'}}>Not in Election Year</h3>
    <>
    {/* <Ballot />
      <Link to='/vote' className='btn btn-primary btn-details' onClick={handleRep} >
        Back
      </Link> */}
     {/* </div>
     </article> */}
    </>
    }

{!vote4 ?
     <article className='cocktail'>
     <div className='img-container'>
       <img src={img} alt='mam' />
     </div>
     <div className='cocktail-footer'>
       <h3 style={{color:'red'}}>State House of Assembly Election</h3>
       <p style={{color:'black'}}><strong>{product.lgaName}</strong></p>
      <Link to='/vote' className='btn btn-primary btn-details'
      // category={category} product={product}
      // order={order} myLga={myLga} click={click}
      // myState={myState}  myWard={myWard}
      
      onClick={handleAssb} >
        Vote
      </Link> 
      </div>
    </article> : 
    // <article className='cocktail'>
    // <div className='img-container'>
    //   <img src={category.Assb} alt='mam' />
    // </div>
    // <div className='cocktail-footer'>
    //   <h3 style={{color:'red'}}>Not in Election Year</h3>
    <>
    {/* <Ballot />
      <Link to='/vote' className='btn btn-primary btn-details' onClick={handleAssb} >
        Back
      </Link> */}
    {/* </div>
    </article> */}
    </>
    }         
      </>
    )
}

export default Array
