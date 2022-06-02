import React, { useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import Instagram from '../../assets/images/instagram.svg';
import Viber from '../../assets/images/viber.svg';
import './styles.scss'
import { geolocationInfo } from '../../geolocation-info.js';

const containerStyle = {
  width: '100%',
  height: '477px'
};

const center = {
	lat: 48.464718,
	lng: 35.046185
};

function MainMap() {
	const [selectedClinic, setSelectedClinic] = useState(false);

	return (
		<LoadScript
		googleMapsApiKey="AIzaSyA-172s8-cEZIqJ44qxzfkFRe4aYcf2jbE"
		>
			<div className='main-map'>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={6}
				>
				{
					geolocationInfo.map((item) => {
						return (
							<Marker
								key={item.properties.id}
								position={{
									lat: item.properties.coordinates[0],
									lng: item.properties.coordinates[1]
								}}
								onClick={() => {
									setSelectedClinic(item)
								}}
							>
							{selectedClinic === item && (
									<InfoWindow className="info-window" options={{ maxWidth: 550, maxHeight: 550, }}>
										<div className="info-window__container">
											<img className="info-window__doctor-image" src={item.properties.image} alt="" />
											<div className="info-window__doctor-data">
												<p className="info-window__doctor-data-name">{item.properties.name}</p>
												<p
												className="info-window__doctor-data-experience">{item.properties.experience}</p>
												<p
												className="info-window__doctor-data-clinic">{item.properties.clinicName}</p>
												<p
												className="info-window__doctor-data-item_orange">{item.properties.phoneNumber}</p>
												<div className="info-window__doctor-socials">
													<img className="info-window__doctor-socials-image"
													src={Instagram} alt="Instagram icon">
													</img>
													<img className="info-window__doctor-socials-image" src={Viber} alt="Viber icon" />
												</div>
											</div>
										</div>
									</InfoWindow>
								)
							}
							</Marker>
						)
					})
				}
				</GoogleMap>
			</div>
		</LoadScript>
	)
}

export default MainMap;
