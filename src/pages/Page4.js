import React from 'react'
import img from '../images/download.jpg';
import { Link } from 'react-router-dom'




const Array = ({category, product, order, myState, myLga, click,  myWard}) => {
    
  const [vote, setVote] = React.useState(false);
  const [vote1, setVote1] = React.useState(false);
    

   const handlePres = ()=>{
    setVote(!vote);
}
const handleGov = ()=>{
  setVote1(!vote1);
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
      <Link to='/vote' className='btn btn-primary btn-details'
      // category={category} product={product}
      // order={order} myLga={myLga} click={click}
      // myState={myState}  myWard={myWard} 
      
      onClick={handlePres} >
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
      <Link to='/vote' className='btn btn-primary btn-details'
      // category={category} product={product}
      // order={order} myLga={myLga} click={click}
      // myState={myState}  myWard={myWard} 
      
      onClick={handleGov} >
        Vote
      </Link> 
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

      </>
    )
}

export default Array
