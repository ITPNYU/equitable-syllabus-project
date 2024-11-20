// TeamCard.js
import React from 'react'
import './TeamCard.css'

function TeamCard({ image, name, role, email, bio }) {
	return (
		<div className='team-card'>
			<div className='team-card__image-wrapper'>
				{image && <img src={image} alt={name} className='team-card__image' />}
				<div className='team-card__bio-overlay'>
					<p className='team-card__bio-text'>{bio}</p>
				</div>
			</div>
			<h3 className='team-card__name'>{name}</h3>
			<p className='team-card__role'>{role}</p>
			{email && (
				<a href={`mailto:${email}`} className='team-card__email'>
					{email}
				</a>
			)}
		</div>
	)
}

export default TeamCard
