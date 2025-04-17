import React from 'react'
import InfoCard from '../../InfoCard'
import { useEffect } from 'react'

import SR1Img from '../../images/sr-1.png'
import SR2Img from '../../images/sr-2.png'
import SR3Img from '../../images/sr-3.png'

function SyllabusWorkshop() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='section--top'>
			<div className='section section--center'>
				<h3 className='section__title'>Syllabus Review Workshop</h3>
				<p className='body-large'>
					Our syllabus review workshop provides faculty a 90-minute structured
					session to work on concrete syllabi, applying an equity lens. Each
					participant brings one syllabus to work on.
				</p>
				<div className='info-card-wrapper'>
					<InfoCard
						image={SR1Img}
						alt="Visual contrast of 'Welcoming' and 'Not Validating' labels to explore classroom tone"
						heading='Reflection'
						text='Use the Cue Syllabus Review Tool to label each section of your syllabus.'
					/>
					<InfoCard
						image={SR2Img}
						alt='Speech bubble with a glowing light bulb, symbolizing idea sharing and discussion'
						heading='Discussion'
						text='Discuss strategies to implement Inclusive Teaching principles.'
					/>
					<InfoCard
						image={SR3Img}
						alt='Hand-drawn syllabus with annotations and a pen, representing collaborative review'
						heading='Syllabus Swap'
						text='Swap syllabi with a partner and provide suggestions to each other.'
					/>
				</div>
			</div>
		</div>
	)
}

export default SyllabusWorkshop
