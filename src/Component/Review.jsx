import React from 'react'
import CustomerReview from './CustomerReview'

function Review(props) {
  return (
    <div>
        <h2 className='title3'>What Our Customers Say</h2>
        <div className='review'>
        {props.review.map((item)=>(
        <CustomerReview review={item} />
      ))}
      </div>

    </div>
  )
}

export default Review