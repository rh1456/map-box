import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

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
      {...viewport}
      mapboxApiAccessToken={
        'pk.eyJ1IjoicmgxNDU2IiwiYSI6ImNrM3FhZWFnNTBieGMzY3BlY2d4ZzA2Nm4ifQ.9yHbveT97fCPRZj0ZHjx4Q'
      }
      mapStyle="mapbox://styles/rh1456/ck3qcvxed7kvp1cru24h4p490"
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
    ></ReactMapGL>
  )
}

export default App
