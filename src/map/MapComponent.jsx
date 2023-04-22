import React from "react";
import "./MapComponent.css"
// import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

import { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import LetterModal from "./LetterModal";

import { useRef } from "react";

const MapComponent = () => {
  

  const initialMarkers = [
    {
      position: {
        lat: 43.23709,
        lng: 76.93135,
      },
      value: "Проект нфакториал",
      id: 0,
    },
  ];

  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const [markers, setMarkers] = useState(initialMarkers);
  const [isActive, setIsActive] = useState(false);
  const [coordinates, setCoordinates] = useState("");

  const [text,setText] = useState("")
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 40.67,
    lng: -75.22444,
  };

  const inputRef = useRef(null);


  const mapClicked = (event) => {
    setCoordinates({
      longitude: event.latLng.lng(),
      lattitude: event.latLng.lat(),
    });
   



    setIsActive((prevActive) => !prevActive);
    
  };

  const markerClicked = (marker, index) => {
    setActiveInfoWindow(index);
    console.log(marker, index);
    
  };

  const saveClicked = (message) => {
    // console.log(inputRef.current.value);
    // console.log(lat,lng)

    if(!text) return alert("You cannot save empty note");

    setMarkers([
        ...markers,
        {
          position: {
            lat: coordinates.lattitude,
            lng: coordinates.longitude,
          },
          value: text,
          id: markers[markers.length - 1].id + 1,
        },
      ]);

    const data = {
      message: message,
      location: coordinates,
    };

    
    setText('');
    setIsActive(false);
    //  axios.post('http://localhost:3002/note', {message: inputRef.current.value})
    // .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
 
    
  };
   

  const handleModalClose = (id) => {

    // const checkOnEmpty = markers[id].value;

    // if(!checkOnEmpty){
    //     const leftMarkers = markers.slice(0,id)
    //     const rightMarkers = markers.slice(id+1);

    //     console.log(leftMarkers,rightMarkers)
    //     setMarkers([...leftMarkers,rightMarkers])
    // }

    setIsActive(false);
  };

  const handleChangeLetterValue = (e, id) => {
    setText(e.target.value)
    // setMarkers((prevMarkers) =>
    //   prevMarkers.map((marker) => {
    //     if (marker.id === id) return { ...marker, value: e.target.value };
    //     else return marker;
    //   })
    // );
  };


console.log(markers)  

  return (
    <div className="inside-map">
      <LoadScript googleMapsApiKey="AIzaSyAWsxtBQUU_0CK-lhLXpf-fa8NMPIRem9g">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={mapClicked}
        >
          {markers.map((marker) => (
            <>
              <Marker
                key={marker.id}
                position={marker.position}
                label={marker.label}
                icon="log.jpg"
                onClick={(event) => markerClicked(marker, marker.id)}
              >
                {activeInfoWindow === marker.id && (
                  <InfoWindow position={marker.position}>
                    <b>{marker.value}</b>
                  </InfoWindow>
                )}
              </Marker>

              <LetterModal
                isActive={isActive}
                handleModalClose={handleModalClose}
                inputRef={inputRef}
                saveClicked={saveClicked}
                val={text}
                handleChangeLetterValue={handleChangeLetterValue}
                id={marker.id}
              />
            </>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;


// const LocationPin = ({ text }) => (
//     <div className="pin">
//       <Icon icon={locationIcon} className="pin-icon" />
//       <p className="pin-text">{text}</p>
//     </div>
//   )


// const Map = ({ location, zoomLevel }) => (
//     <div className="map">
//       <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
//       <div className="google-map">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: '' }}
//           defaultCenter={location}
//           defaultZoom={zoomLevel}
//         >
//           <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   )

// export default Map

// export const Map = () => {

//     const location = {
//         address: '1600 Amphitheatre Parkway, Mountain View, california.',
//         lat: 37.42216,
//         lng: -122.08427,
//       }
//     const zoomLevel = 17

//     const bootstrapURLKeys = "AIzaSyAWsxtBQUU_0CK-lhLXpf-fa8NMPIRem9g";


//     return (

        
            
//                 <div className="inside-map" >
//                     <div className="map">
//                         <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//                         <div className="google-map">
//                         <GoogleMapReact
//                             bootstrapURLKeys={{ key: '' }}
//                             defaultCenter={location}
//                             defaultZoom={zoomLevel}
//                         >
//                             <LocationPin
//                             lat={location.lat}
//                             lng={location.lng}
//                             text={location.address}
//                             />
//                         </GoogleMapReact>
//                         </div>
//                     </div>


//                 </div>
            

//     )
// }