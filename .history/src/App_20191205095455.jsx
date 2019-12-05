import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import MapData from './Data/us_cities.json'
const App = () => {
  // const MapboxAccessToken = {pk.eyJ1IjoicmgxNDU2IiwiYSI6ImNrM3FhZWFnNTBieGMzY3BlY2d4ZzA2Nm4ifQ.9yHbveT97fCPRZj0ZHjx4Q}

  /*Display St. Pete upon opening page with Long/Lat Coordinates*/
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
      {/* Map over the the array to pull Long/Lat coordinates for each city from JSON data */}
      {MapData.features.map(city => (
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

      {/* Ternary, if city is selected do this function*/}

      {setCity ? (
        <Popup
          latitude={setCity.geometry.coordinates[1]}
          longitude={setCity.geometry.coordinates[0]}
          onClose={() => {
            setCity(null)
          }}
        >
          <div>City</div>
        </Popup>
      ) : null}
    </ReactMapGL>
  )
}

export default App
