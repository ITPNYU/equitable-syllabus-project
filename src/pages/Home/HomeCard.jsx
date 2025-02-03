import React from 'react'

function HomeCard({ icon, heading, text }) {
	return (
		<div className='home-card'>
			<img className='home-card__icon' src={icon} alt={`${heading} icon`} />
			<h3 className='heading-3'>{heading}</h3>
			<p className='home-card__text'>{text}</p>
		</div>
	)
}

export default HomeCard
