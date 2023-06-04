import React, { useState } from "react";
import "./Modal.css";
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import mapImage from './assets/mapImage.png';
import close from './assets/close.png';
import geo from './assets/geo.png';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    
      <img onClick={toggleModal} src={mapImage} alt="map" className="mapImage"/>
      <img  onClick={toggleModal} src={geo} alt="geo" className="geo"/>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
       
          <YMaps>
                            <Map defaultState={{ center: [55.746223, 37.509164], zoom: 16 }} className="map">
                                <Placemark defaultGeometry={[55.746223, 37.509164]} />
                            </Map>
                        </YMaps>
                        </div>
           
          <img className="close-modal close" onClick={toggleModal} src={close} alt="close"/>
          </div>
      )}
      
    </>
  );
}
