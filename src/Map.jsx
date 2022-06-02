import React from 'react'
import GoogleMapReact from 'google-map-react';
import withScriptjs from 'google-map-react'
import withGoogleMap from 'google-map-react'

function Map() {
  return (
    <MainContainer>
      <GoogleMapReact defaultZoom={10} defaultCenter={{lat: 48.464718, lng: 35.046185}} />
    </MainContainer>
  );
}

export default Map;

const MainContainer = styled.div`
  background-color: green;
`