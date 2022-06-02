import React from 'react'
import MainMap from '../MainMap/MainMap'
import './styles.scss'

function MainPage() {
  return (
	<div className='main-page _wrapper'>
		<h2 className="_header">
			Карта сертифікованих ортопедів та нейрохірургів України
		</h2>
		<h3 className="main-page__subtitle">
			Швидкий та зручний пошук спеціаліста з потрібної місцевості
		</h3>
		<MainMap />
	</div>
  )
}

export default MainPage