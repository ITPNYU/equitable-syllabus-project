import React from 'react'
import InfoCard from '../../InfoCard'
import { useEffect } from 'react'

import RSImg from '../../images/rs.png'
import RS1Img from '../../images/rs-1.png'
import RS2Img from '../../images/rs-2.png'
import RS3Img from '../../images/rs-3.png'
import RSIllustImg from '../../images/rs-illustration.png'

function ResearchService() {
	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<div className='section--top'>
			<div className='section'>
				<div className='section__content'>
					<div className='section__text'>
						<h3 className='section__title'>Get Help Creating Your Syllabus</h3>
						<p className='body-large'>
							We offer faculty members an opportunity to work with a research
							assistant that provides tailored recommendations and support to
							help you create a curriculum that empowers your students.
						</p>
						<a
							href='https://docs.google.com/forms/d/e/1FAIpQLSfwcSe5T5TAuvOmNY8ov4csUZ-h5krLJn8AL1OIn8VuL9xUUg/viewform?usp=sf_link'
							rel='noopener noreferrer'
						>
							<button className='bttn--primary'>
								Sign Up For Research Service
							</button>
						</a>
					</div>
					<div className='section__img-wrapper'>
						<img
							className='section__img'
							src={RSImg}
							alt='Illustration of a faculty member and researcher collaborating on a syllabus'
						/>
					</div>
				</div>
			</div>
			<div className='section section--center'>
				<h3 className='section__title section__title--center'>
					Our Research Service Takes Just a Few Steps
				</h3>
				<p className='body-large'>
					The research process can last anywhere from 3 weeks to multiple months
					of sustained engagement.
				</p>
				<div className='info-card-wrapper'>
					<InfoCard
						image={RS1Img}
						heading='Intake'
						text='Faculty pinpoints specific areas of their syllabus the researcher can focus on'
						alt='Icon representing intake process'
					/>
					<InfoCard
						image={RS2Img}
						heading='Research'
						text='Researcher compiles syllabus recommendations and plans regular check-ins'
						alt='Icon representing research process'
					/>
					<InfoCard
						image={RS3Img}
						heading='Resources'
						text='Researcher prepares an initial set of resources for the syllabus and continues communication as needed.'
						alt='Icon representing curated syllabus resources'
					/>
				</div>
			</div>
			<div className='section'>
				<div className='section__content'>
					<div className='section__text'>
						<h3 className='section__title'>
							Sign Up for Research Service Today
						</h3>
						<p className='body-large'>
							Improve your syllabus for more equity and inclusivity. Fill out
							our intake form and a researcher will be assigned to you.
						</p>
						<a
							href='https://docs.google.com/forms/d/e/1FAIpQLSfwcSe5T5TAuvOmNY8ov4csUZ-h5krLJn8AL1OIn8VuL9xUUg/viewform?usp=sf_link'
							rel='noopener noreferrer'
						>
							<button className='bttn--primary'>
								Sign Up For Research Service
							</button>
						</a>
					</div>
					<div className='section__img-wrapper'>
						<img
							className='section__img'
							src={RSIllustImg}
							alt='Illustration of an inclusive classroom with faculty and students engaged in learning'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResearchService
