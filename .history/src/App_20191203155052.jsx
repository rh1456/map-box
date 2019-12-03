import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const App = () => {
  // const MapboxAccessToken = {pk.eyJ1IjoicmgxNDU2IiwiYSI6ImNrM3FhZWFnNTBieGMzY3BlY2d4ZzA2Nm4ifQ.9yHbveT97fCPRZj0ZHjx4Q}
  const [viewport, setViewport] = useState({
    latitude: 27.770973599999998,
    longitude: -82.66341729999999,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  })
  return (
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1IjoicmgxNDU2IiwiYSI6ImNrM3FhZWFnNTBieGMzY3BlY2d4ZzA2Nm4ifQ.9yHbveT97fCPRZj0ZHjx4Q'
      }
    />
  )
}

export default App
