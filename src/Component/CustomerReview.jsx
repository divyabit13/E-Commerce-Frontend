import React from 'react'

function CustomerReview(props) {

    const {response,name} =props.review
  return (
    <div className='custom'>
       <p className='cus1'>{response}</p>
       <h4 className='cus2'>{name}</h4>
    </div>
  )
}

export default CustomerReview