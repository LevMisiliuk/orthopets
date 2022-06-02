import React from 'react';
import { useParams } from 'react-router-dom';
import { geolocationInfo } from '../../geolocation-info.js';
import './styles.scss';

function OrthopetPage() {
  const params = useParams();
  const filtredData = geolocationInfo.filter((item) => item.properties.id === Number(params.id))
  const orthopetData = filtredData[0].properties;
  console.log(orthopetData)
  return (
    <div className="orthopet-page _wrapper">
      <div className="orthopet-page__inner">
        <div className="orthopet-page__image-block">
          <img className="orthopet-page__image" src={orthopetData.image} alt="" />
        </div>
        <div className="orthopet-page__info-block">
          <div className="orthopet-page__info-block-name">
            {orthopetData.name}
          </div>
          <div className="orthopet-page__ex-and-spec">
            <div className="orthopet-page__info-block-specialization">
              {orthopetData.specialization}
            </div>
            <div className="orthopet-page__info-block-experience">
              {orthopetData.experience}
            </div>
          </div>
          <div className="orthopet-page__info-block-extra-info">
            {orthopetData.operations}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrthopetPage