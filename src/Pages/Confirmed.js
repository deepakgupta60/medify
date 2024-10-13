import React from 'react'
import { useLocation } from 'react-router-dom'

const Confirmed = () => {

  const location = useLocation()
  const {time, selectedCentre}=location.state

  return (
    <div>Confirmed {time}</div>
  )
}

export default Confirmed