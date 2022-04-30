import React from 'react'

const Badge = (props) => {
  return (
    <div> <h4 className=' badge bg-primary pt-2 fs-5 fw-bold '>{props.text}</h4></div>
  )
}

export default Badge