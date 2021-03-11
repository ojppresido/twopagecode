import React from 'react'
import { Link } from 'react-router-dom'
import mark from '../images/thumb.jpg'




export default function PartySelect({name, logo, category, product, order}) {

  const [vote, setVote] = React.useState(false);

  const handleVote = ()=>{
    setVote(!vote)
  }

  return (
    <>{!vote ?
      <>
    <div  logo={logo} name={name} className='cocktail' >
      <div className='img-container'>
        <img src={logo} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        {/* <p>{info}</p> */}
        <button className='btn btn-primary btn-details'
        onClick={handleVote}
        >
        vote
        </button>
      </div>
    </div>
    
    <img src={mark} alt='thumb' style={{height: '100px' , width:'120px', marginLeft: '150px',marginTop: '-165px', opacity: '50%'}}  />
   </> :

   <>
   <div  logo={logo} name={name} className='cocktail' >
   
      <div className='img-container'>
        <img src={logo} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <p style={{color:'green'}}>Thumb to vote</p>
        <button className='btn btn-primary btn-details'
        onClick={handleVote}
        >
          Back
        </button>
      </div>
    </div>
    <Link to='/voteOk' > 
    <img src={mark} alt='thumb' style={{height: '95px', width:'150px', marginLeft: '120px',marginTop: '-160px', opacity: '100%'}}  />
    </Link>
   
   </>
}
</>

  )
}
