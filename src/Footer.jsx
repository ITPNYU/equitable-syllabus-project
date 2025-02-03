import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className='footer'>
			<div>
				<Link to='/' className='logo'>
					Equitable Syllabus Project
				</Link>
				<div className='footer__left'>
					<a href='mailto:esp@nyu.edu'>esp@nyu.edu</a>
					<div className='footer__vl'></div>
					<p>ITP/IMA</p>
					<div className='footer__vl'></div>
					<p>New York University</p>
				</div>
			</div>
			<div className='footer__right'>
				<div className='footer__section'>
					<h3 className='body-default'>ITP/IMA Community</h3>
					<ul className='footer__menu'>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://tisch.nyu.edu/itp'
								rel='noopener noreferrer'
							>
								About ITP/IMA
							</a>
						</li>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://itpnyu.github.io/ITP-IMA-Code-of-Conduct/index'
								rel='noopener noreferrer'
							>
								Code of Conduct
							</a>
						</li>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://itp-techandsociety.github.io/online/'
								rel='noopener noreferrer'
							>
								Tech and Society
							</a>
						</li>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://itp.nyu.edu/groups/equitable/'
								rel='noopener noreferrer'
							>
								Equitable Working Group
							</a>
						</li>
					</ul>
				</div>
				<div className='footer__section'>
					<h3 className='body-default'>NYU Diversity Resources</h3>
					<ul className='footer__menu'>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://tisch.nyu.edu/diversity'
								rel='noopener noreferrer'
							>
								Tisch Office of Diversity
							</a>
						</li>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://tisch.nyu.edu/diversity/IDBEA_Commitments'
								rel='noopener noreferrer'
							>
								Tisch Commitments to Diversity
							</a>
						</li>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://www.nyu.edu/life/global-inclusion-and-diversity.html'
								rel='noopener noreferrer'
							>
								NYU Global Inclusion and Diversity
							</a>
						</li>
						<li className='footer__item'>
							<a
								className='footer__link'
								href='https://www.nyu.edu/about/policies-guidelines-compliance/equal-opportunity/bias-response/report-a-bias-incident.html'
								rel='noopener noreferrer'
							>
								NYU Bias Response Line
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
