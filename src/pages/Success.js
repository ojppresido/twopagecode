import React from 'react'
import { Link } from 'react-router-dom'
import thick from '../images/thick.jpg';


const Success = ({logo, name}) => {
    return (
        <div>
            
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={thick} alt={name}></img>
        
        </div>
      </section>

        </div>
    )
}

export default Success
