import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import MenuIcon from './icons/menu.svg'

function Navbar() {
	const navRef = useRef()
	const showNavbar = () => {
		navRef.current.classList.toggle('nav--responsive')
	}

	return (
		<header className='header--nav'>
			<Link to='/' className='logo'>
				Equitable Syllabus Project
			</Link>
			<button
				className='nav__button'
				onClick={showNavbar}
				aria-label='Toggle navigation'
			>
				<img src={MenuIcon} alt='Menu' />
			</button>
			<nav className='nav' ref={navRef}>
				<ul className='nav__menu'>
					<li>
						<Link onClick={showNavbar} className='nav__item' to='/team'>
							Team
						</Link>
					</li>
					<li>
						<Link onClick={showNavbar} className='nav__item' to='/contribute'>
							Contribute
						</Link>
					</li>
					<li>
						<Link
							onClick={showNavbar}
							className='nav__item'
							to='/research-service'
						>
							Research Service
						</Link>
					</li>
					<li>
						<Link
							onClick={showNavbar}
							className='bttn--secondary bttn--secondary--nav'
							to='/research-database'
						>
							Research Database
						</Link>
					</li>
					<li>
						<Link
							onClick={showNavbar}
							className='bttn--primary bttn--primary--nav'
							to='/syllabus-guide'
						>
							Syllabus Guide
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
