
import React from "react";
import "./map.css"

const index = () => {
  
  return (
    <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13249.739157064916!2d151.2151471!3d-33.8784545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae19ae7a9dd5%3A0x82a5e8902d21ba99!2sSiddiqui%20Associates!5e0!3m2!1sen!2sau!4v1676635939166!5m2!1sen!2sau"
        style={{ border: "0", width: "600", height: "450" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="#"
        className="mapSize"
     
      
      
     
      />

    </div>
  );
};

export default index;

// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import './map.css';

// const MapContainer = () => {
//   const mapStyles = {
//     height: "400px",
//     width: "100%"
//   };

//   const center = {
//     lat: -33.8784545,
//     lng: 151.2151471
//   };

//   return (
//     <div className="container">
//       <LoadScript googleMapsApiKey="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13249.739157064916!2d151.2151471!3d-33.8784545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae19ae7a9dd5%3A0x82a5e8902d21ba99!2sSiddiqui%20Associates!5e0!3m2!1sen!2sau!4v1676635939166!5m2!1sen!2sau">
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={center}
//         />
//       </LoadScript>
//     </div>
//   );
// };

// export default MapContainer;


