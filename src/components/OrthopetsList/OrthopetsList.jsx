import React, { useState, useEffect } from 'react'
import './styles.scss'
import { geolocationInfo } from '../../geolocation-info.js';
import Instagram from '../../assets/images/instagram.svg';
import Viber from '../../assets/images/viber.svg';
import { useNavigate } from 'react-router-dom';


function OrthopetsList() {
  const navigate = useNavigate()

  return (
    <div className="orthopets-list _wrapper">
      <div className="orthoprts-list _header">
        Список сертифікованих ортопедів
      </div>
      <div className="orthopets-list__items">
          {
            geolocationInfo.map((item) => {
              return (
                <div className="orthopets-list__item" key={item.properties.id} onClick={() => navigate(`/orthopets-list/${item.properties.id}`)}>
                  <img className="orthopets-list__doctor-image" src={item.properties.image} alt="Doctor" />
                  <div className="orthopets-list__doctor-data">
                    <div className="orthopets-list__doctor-data-inner">
                      <p className="orthopets-list__doctor-data-item">{item.properties.name}</p>
                      <p
                      className="orthopets-list__doctor-data-item">{item.properties.experience}</p>
                      <p
                      className="orthopets-list__doctor-data-item">{item.properties.clinicName}</p>
                      <p
                      className="orthopets-list__doctor-data-item_orange">{item.properties.phoneNumber}</p>
                      <div className="orthopets-list__doctor-socials">
                        <img className="orthopets-list__doctor-socials-image"
                        src={Instagram} alt="Instagram">
                        </img>
                        <img className="orthopets-list__doctor-socials-image" src={Viber} alt="Viber" />
                      </div>
                    </div>
                    <button type="button" className="orthopets-list__button" onClick={() => navigate(`/orthopets-list/${item.properties.id}`)}>
                      Докладніше
                    </button>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default OrthopetsList