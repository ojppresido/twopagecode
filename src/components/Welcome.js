import React from 'react'

const Welcome = ({product, category, order, myState, myWard, myLga}) => {
    return (
        <div className='cocktail' style={{marginTop:'-100px'}}>
        <h1 className='cocktail-title'>Welcome you reside in </h1>
        <div className='drink-data' style={{backgroundColor:'pink'}}>
        <h3> State: {category.stateName}</h3>
        <h3> LGA: {product.lgaName}</h3>
        <h3> Ward: {order.wardName}</h3>
        </div>

        <h1 className='cocktail-title'>And you are about to vote in</h1>
        <div className='drink-data' >
        <h3> State: {myState.stateName}</h3>
        <h3> LGA: {myLga.lgaName}</h3>
        <h3> Ward: {myWard.wardName}</h3>
        </div>
        </div>
    )
}

export default Welcome
