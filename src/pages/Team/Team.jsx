import React from 'react'
import TeamCard from './TeamCard'
import './TeamCard.css'

import BlairAvatar from '../../images/team/blair-avatar.png'
import ChaskiAvatar from '../../images/team/chaski-avatar.png'
import DivyaAvatar from '../../images/team/divya-avatar.png'
import JennaAvatar from '../../images/team/jenna-avatar.png'
import KayleyAvatar from '../../images/team/kayley-avatar.png'
import SophiaAvatar from '../../images/team/sophia-avatar.png'
import BiancaAvatar from '../../images/team/bianca-avatar.png'
// import AudreyAvatar from '../../images/team/audrey-avatar.png'
// import LiyanAvatar from '../../images/team/liyan-avatar.png'
// import MelikaAvatar from '../../images/team/melika-avatar.png'
// import SophiaCollanderAvatar from '../../images/team/sophia-collander-avatar.png'
// import YafiraAvatar from '../../images/team/yafira-avatar.png'

import Blair from '../../images/team/blair.png'
import Chaski from '../../images/team/chaski.png'
import Divya from '../../images/team/divya.png'
import Jenna from '../../images/team/jenna.png'
import Kayley from '../../images/team/kayley.png'
import Sophia from '../../images/team/sophia.png'
import Bianca from '../../images/team/bianca.png'
import Spencer from '../../images/team/spencer.png'
import Rashida from '../../images/team/rashida.png'
import Polina from '../../images/team/polina.png'
import Audrey from '../../images/team/audrey.png'
import Liyan from '../../images/team/liyan.png'
import Melika from '../../images/team/melika.png'
import SophiaCollander from '../../images/team/sophiac.png'
import Yafira from '../../images/team/yafira.png'

function Team() {
	return (
		<div className='section--top team'>
			<div className='section section--center section--subtitle section--team'>
				<h1 className='section__heading section__heading-subtitle'>
					Equitable Syllabus Project Team
				</h1>
				<p className='body-large'>
					The Equitable Syllabus Project team strives to help faculty re-engage
					their course material with an equitable lens.
				</p>
				<div className='team__avatar-wrapper'>
					<img className='team__avatar' src={BlairAvatar} alt='Blair Simmons' />
					<img
						className='team__avatar'
						src={SophiaAvatar}
						alt='Sophia Edwards'
					/>
					<img className='team__avatar' src={KayleyAvatar} alt='Kayley Chery' />
					<img className='team__avatar' src={JennaAvatar} alt='Jenna Han' />
					<img className='team__avatar' src={BiancaAvatar} alt='Bianca Gan' />
					{/* <img className='team__avatar' src={AudreyAvatar} alt='Audrey Oh' />
					<img className='team__avatar' src={LiyanAvatar} alt='Liyan Ibrahim' />
					<img
						className='team__avatar'
						src={MelikaAvatar}
						alt='Melika Panbehchi'
					/>
					<img
						className='team__avatar'
						src={SophiaCollanderAvatar}
						alt='Sophia Collander'
					/>
					<img
						className='team__avatar'
						src={YafiraAvatar}
						alt='Yafira Martinez'
					/> */}
				</div>
			</div>
			<div className='section'>
				<h2 className='section__title text-center'>Current Members</h2>
				<div className='team__card-wrapper'>
					<TeamCard
						image={Blair}
						name='Blair Simmons'
						role='Project Manager'
						email='blair.simmons@nyu.edu'
						bio='♡'
					/>
					<TeamCard
						image={Liyan}
						name='Liyan Ibrahim'
						role='☆ role ☆'
						email='li457@nyu.edu'
						bio={`Liyan is a Palestinian multimedia artist based between New York City and Abu Dhabi. Her artistic practice delves into real-world reflections, examining how socio-political changes influence her politically and socially engaged art, particularly as a Palestinian in diaspora.\n\nHer work has been exhibited in multiple spaces across NYU (2021, 2023, 2024) and at the Mozilla Foundation Festival as part of the Decolonizing AI space (2022).\n\nBeyond her artistic practice, Liyan’s political activism is integral to her work. In the summer of 2024, she joined the Berkman Klein Center at Harvard Law School to help develop educational programs focused on tech ethics and AI. She is currently pursuing a master's degree in the Interactive Telecommunications Program at NYU's Tisch School of the Arts in Brooklyn, New York.`}
					/>

					<TeamCard
						image={Melika}
						name='Melika Panbehchi'
						role='☆ role ☆'
						email='mp4563@nyu.edu'
						bio={`Melika Panbehchi is a multimedia artist, (im)migrant rights organizer, storyteller and a curator of vibes from Tehran, Iran, who resides in the in between of many places, identities, and desires. After spending half of her life in San Francisco bay area and half in tehran, she currently lives in Bed-stuy, Brooklyn.\n\nHer work is both tangible and immersive, making use of soft materials, electronics, computational poetry and collective storytelling. with each piece, she seeks to emulate assertiveness in liminality and longs to speak of be-longing in the endless blackhole of nostalgia.\n\nShe is a Master's student at the Interactive Telecommunications Program (ITP) at Tisch, New York University where she’s learning to bridge her passion for taking an active role in the creation of a world she wants to live as an organizer, with designing immersive and tangible experiences that invite others to join in and take up space in their own lives.\n\nPrior to ITP, Melika served as the senior statewide organizer at california immigrant policy center where she focused on fighting detention, deportation and food insecurity through uplifting community members’ stories and advocacy. She has a bachelor's degree in sociology with a minor in multimedia journalism from UC Berkeley.`}
					/>
					<TeamCard
						image={Audrey}
						name='Audrey Oh'
						role='☆ role ☆'
						email='do772@nyu.edu'
						bio={`Audrey Oh (Korean, b.1996) is a trans-media artist and activist whose work explores themes of tradition, ritual, and femininity, delving into the tensions between the physical and digital realms. By merging traditional techniques like print, photography, and sculpture with found digital archives, she channels the corporeal into digital space, creating moments where the body metaphorically “excretes” into the digital.\n\nShe is part of the Center for Ethnic Studies community at Columbia University, where she has studied subversive methodologies of teaching, learning, performance, and protest. Audrey has also built a career working with non-profit organizations such as CITYarts, OCA-NY, and Literacy Partners, all of which aim to uplift marginalized communities in NYC.`}
					/>
					<TeamCard
						image={SophiaCollander}
						name='Sophia Collander'
						role='☆ role ☆'
						email='sec8890@nyu.edu'
						bio={`Sophia Collender is a chronically uncomfortable person interested in exploring how the world can be made more comfortable. She is dedicated to experimenting with and rethinking relationships between people and their ecosystems – and exploring how changes to that dynamic can make (and keep) the world a comfortable place for all. \n\nAs a first-year graduate student at NYU Tisch's ITP she is developing her knowledge of art, media, design, computation, and bioengineering in the pursuit of developing a truly cross-disciplinary understanding of the world. \n\nDrawing on her backgrounds in academic research and fine art appraisal, she is passionate about using projects that run the gamut from slime mold explorations to the sonification of weather patterns for EDM mixes to illustrate that all fields ultimately inform one another and come into contact.`}
					/>
					<TeamCard
						image={Yafira}
						name='Yafira Martinez'
						role='Front End Web Developer'
						email='ym3317@nyu.edu'
						bio={`Yafira Martinez, known online as electrocute ✿, is a creative technologist and front-end developer based in New York City. With a background in computer science, she is currently pursuing graduate studies at NYU’s Interactive Telecommunications Program (ITP), where she blends technical expertise with artistic vision to explore creative coding, physical computing, and interactive design.\n\nA passionate tinkerer and designer, Yafira specializes in crafting user-centered, visually compelling digital experiences. Her approach is rooted in a deep understanding of human-computer interaction, making technology both empowering and accessible. Whether designing intuitive interfaces, experimenting with circuits, or creating interactive art, she seeks to push the boundaries of traditional design and engineering.\n\nDrawing inspiration from the Y2K era and nostalgic web aesthetics, Yafira infuses her projects with a unique blend of minimalist design, playful creativity, and innovative technology. She thrives in creative environments, constantly striving to bridge the gap between art and technology to create experiences that enrich everyday life.\n\nDriven by curiosity and a desire to make technology more engaging and poetic, she is committed to creating seamless, inspiring work that becomes a meaningful part of everyday life.`}
					/>
					<TeamCard
						image={Kayley}
						name='Kayley Chery'
						role='Research Specialist & Backend Developer'
						email='kac7748@nyu.edu'
						bio='♡ '
					/>
				</div>
			</div>
			<div className='section'>
				<div className='team__avatar-wrapper'>
					<img className='team__avatar' src={ChaskiAvatar} alt='Chaski No' />
					<img className='team__avatar' src={DivyaAvatar} alt='Divya Mehra' />
				</div>
				<h2 className='section__title text-center'>Alumni</h2>
				<div className='team__card-wrapper'>
					<TeamCard
						image={Rashida}
						name='Rashida Kamal'
						role='Technical Product Manager'
						email='rsk333@nyu.edu'
					/>
					<TeamCard
						image={Chaski}
						name='Chaski No'
						role='Technical Project Manager'
						email='chaski@nyu.edu'
					/>
					<TeamCard
						image={Divya}
						name='Divya Mehra'
						role='Researcher'
						email='dm4924@nyu.edu'
					/>
					<TeamCard
						image={Sophia}
						name='Sophia Edwards'
						role='Researcher'
						email='sge7432@nyu.edu'
					/>
					<TeamCard
						image={Jenna}
						name='Jenna Han'
						role='Front End Web Designer'
						email='jennahan@nyu.edu'
					/>
					<TeamCard
						image={Spencer}
						name='Spencer Ratanavanh'
						role='Researcher'
						email='nr1479@nyu.edu'
					/>
					<TeamCard
						image={Polina}
						name='Polina Kolesnikova'
						role='Researcher'
						email='pk2196@nyu.edu'
					/>
				</div>
			</div>
		</div>
	)
}

export default Team
