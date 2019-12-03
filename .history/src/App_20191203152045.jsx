import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
const App = () => {
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
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    ></ReactMapGL>
  )
}

export default App
