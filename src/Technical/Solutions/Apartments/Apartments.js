import React from 'react'
import { Banner } from '../../../Components/base/Banner/Banner'
import apartment from "./assets/A1.jpg"
const Apartments = () => {
  return (
    <div>
      <Banner image={apartment} title={"Moira"} description={"Apartments"} />
    </div>
  )
}

export default Apartments