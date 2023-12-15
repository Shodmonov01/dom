import React from 'react'
import './Map.scss'

import map from '../../../assets/img/map.png'

function Map() {
  return (
    <div>
      <img className='mapimg' src={map} alt="" />
    </div>
  )
}

export default Map