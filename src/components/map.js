import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import MapsAPI from '../MapsAPI';
import classes from './map.module.css';

const mapBasics = () => {
    return (
      <GoogleMap defaultZoom={15} defaultCenter={{ lat: 35.891679, lng: 14.461123 }}>
      <Marker position={{ lat: 35.891679, lng: 14.461123 }} />
      </GoogleMap>
    )
  };

const WrappedMap = withScriptjs(withGoogleMap(mapBasics));

const Map = () => {
  return (
    <div className={classes.MapBox}>
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MapsAPI}`} loadingElement={<div style={{ height: '100%' }} />} containerElement={<div style={{ height: '100%' }} />} mapElement={<div style={{ height: '100%' }} />} />
    </div>
  )
}

export default Map;
