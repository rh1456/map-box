import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import MapData from './Data/us_cities.json'
const App = () => {
  // const MapboxAccessToken = {pk.eyJ1IjoicmgxNDU2IiwiYSI6ImNrM3FhZWFnNTBieGMzY3BlY2d4ZzA2Nm4ifQ.9yHbveT97fCPRZj0ZHjx4Q}
  const [viewport, setViewport] = useState({
    latitude: 27.770973599999998,
    longitude: -82.66341729999999,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  })
  const [city, setCity] = useState()
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
    >
      {MapData.features.map(capital => (
        <Marker
          key={city.properties.name}
          latitude={city.geometry.coordinates[1]}
          longitude={city.geometry.coordinates[0]}
        >
          <button
            className="cityMarker"
            onclick={e => {
              e.preventDefault()
              setCity(city)
            }}
          >
            <i class="fas fa-flag"></i>
          </button>
        </Marker>
      ))}
    </ReactMapGL>
  )
}

export default App
