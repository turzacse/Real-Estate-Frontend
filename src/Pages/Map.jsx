import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useOutletContext } from 'react-router-dom';
import { RiHomeLine } from "react-icons/ri";

const containerStyle = {
  width: '100%',
  height: '900px',
};

const center = {
  lat: 34.0522,
  lng: -118.2437,
};

const Map = () => {
  const { selectedRegion, selectedCity, selectedDistrict, propertyType, selectedMarketer, priceRange, spaceRange, allProperties } = useOutletContext();

  const [properties, setProperties] = useState([]);
  
  useEffect( () => {
    fetch('demoData.json')
    .then(res => res.json())
    .then(data => setProperties(data))
  } ,[]);

  console.log(properties);


  const filteredProperties = properties?.filter(property => {
    const matchRegion = selectedRegion ? property.address.includes(selectedRegion) : true;
    const matchCity = selectedCity ? property.address.includes(selectedCity) : true;
    const matchDistrict = selectedDistrict ? property.address.includes(selectedDistrict) : true;
    const matchPropertyType = propertyType ? property.propertyType === propertyType : true;
    const matchMarketer = selectedMarketer ? property.userRef === selectedMarketer : true;

    const propertyPrice = property.offer ? property.discountPrice : property.regularPrice;
    const matchPrice = propertyPrice >= priceRange[0] && propertyPrice <= priceRange[1];

    const propertySpace = property.area[0] * property.area[1];
    const matchSpace = propertySpace >= spaceRange[0] && propertySpace <= spaceRange[1];

    return matchRegion && matchCity && matchDistrict && matchPropertyType && matchMarketer && matchPrice && matchSpace;
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDUlNcKXoOFAMcrJq0CON7lwPt2vsDZik4'
  });

  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    const bounds = new window.google.maps.LatLngBounds();
    filteredProperties.forEach(property => {
      bounds.extend({
        lat: property.geoLocation[0],
        lng: property.geoLocation[1],
      });
    });
    map.fitBounds(bounds);
  }, [filteredProperties]);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {filteredProperties.map(property => (
        <Marker
          key={property.id}
          position={{ lat: property.geoLocation[0], lng: property.geoLocation[1] }}
          title={property.title}
          icon={<RiHomeLine />}
        />
      ))}
    </GoogleMap>
  ) : <></>;
};

export default React.memo(Map);
