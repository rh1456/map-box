import React, { useState } from 'react'
import ReactMapGL,{pk.eyJ1IjoicmgxNDU2IiwiYSI6ImNrM3FhZWFnNTBieGMzY3BlY2d4ZzA2Nm4ifQ.9yHbveT97fCPRZj0ZHjx4Q} from 'react-map-gl'

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 27.770973599999998,
    longitude: -82.66341729999999,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  })
  return (
    <ReactMapGL />
  )
}

export default App
