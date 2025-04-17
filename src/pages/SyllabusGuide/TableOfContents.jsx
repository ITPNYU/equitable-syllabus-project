import React from 'react'
import { HashLink } from 'react-router-hash-link'

function TableOfContents() {
	return (
		<div className='toc'>
			<ul className='toc__wrapper'>
				<li className='toc__section'>
					<a
						className='section-title'
						href='https://github.com/jenna5376/equitable-syllabus-project/edit/master/src/markdown/syllabus-guide.md'
						aria-label='Propose a change to the syllabus guide'
					>
						🗣 Propose A Change
					</a>
				</li>
			</ul>
			<ul className='toc__wrapper'>
				<li className='toc__section'>
					<HashLink
						className='section-title'
						to='/syllabus-guide/#5-principles-for-inclusive-teaching'
						aria-label='5 Principles for Inclusive Teaching'
					>
						💡 5 Principles for Inclusive Teaching
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#principle-1---establish-and-support-a-class-climate-that-fosters-belonging-for-all-students'>
						Principle 1: Sense of Belonging
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#principle-2---set-explicit-student-expectations'>
						Principle 2: Expectations
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#principle-3---select-course-content-that-recognizes-diversity-and-acknowledges-barriers-to-inclusion'>
						Principle 3: Diversity
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#principle-4---design-all-course-elements-for-accessibility'>
						Principle 4: Accessibility
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide#principle-5---reflect-on-ones-beliefs-about-teaching-to-maximize-self-awareness-and-commitment-to-inclusion/'>
						Principle 5: Reflection
					</HashLink>
				</li>
			</ul>
			<ul className='toc__wrapper'>
				<li className='toc__section'>
					<HashLink
						className='section-title'
						to='/syllabus-guide/#sample-statements'
						aria-label='Sample syllabus statements'
					>
						📝 Sample Statements
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#diverse-perspectives-and-learning-modes'>
						Diverse Perspectives & Learning Modes
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#participation'>Participation</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#open-office-hours'>
						Open Office Hours
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#extensions'>Extensions</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#communication'>Communication</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#incompletes'>Incompletes</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#attendance'>Attendance</HashLink>
				</li>
			</ul>
			<ul className='toc__wrapper'>
				<li className='toc__section'>
					<HashLink
						className='section-title'
						to='/syllabus-guide/#required-syllabus-statements'
						aria-label='Required syllabus statements'
					>
						📝 Required Statements
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#statement-of-academic-integrity'>
						Statement Of Academic Integrity
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#statement-on-accessibility'>
						Statement On Accessibility
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#statement-on-counseling-and-wellness'>
						Statement On Counseling and Wellness
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#statement-on-use-of-electronic-devices'>
						Statement On Use Of Electronic Devices
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#statement-on-title-ix'>
						Statement On Title IX
					</HashLink>
				</li>
				<li className='toc__subsection'>
					<HashLink to='/syllabus-guide/#statement-of-principle'>
						Statement Of Principle
					</HashLink>
				</li>
			</ul>
		</div>
	)
}

export default TableOfContents
