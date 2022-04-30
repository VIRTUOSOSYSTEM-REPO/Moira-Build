import React from 'react'
import { Banner } from '../../../Components/base/Banner/Banner'
import img from "./Hospital.jpg"
const Hospitals = () => {
  return (
    <div>
      <Banner image={img} title={"MOIRA"} description={"Hospital"} />
    </div>
  )
}

export default Hospitals