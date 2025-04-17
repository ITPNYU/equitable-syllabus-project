import React from 'react'
import { useNavigate } from 'react-router-dom'
import CheckboxList from './CheckboxList'
import FilterIcon from '../../icons/filter.svg'

function Filter({
	formatList,
	setFormatList,
	contList,
	setContList,
	catList,
	setCatList,
}) {
	// filter categories
	const format = [
		'Article',
		'Collection',
		'Book',
		'Website',
		'Video',
		'Audio',
		'Artwork',
		'Tool',
	]
	const continent = ['North America', 'Europe', 'Africa', 'Australia', 'Asia']
	const category = [
		'Tech & Society',
		'Design',
		'Programming & Data',
		'Media Arts',
		'Project Development & Research',
	]

	const navigate = useNavigate()

	function resetChecked() {
		setFormatList([])
		setContList([])
		setCatList([])
	}

	return (
		<div className='filter'>
			<button
				onClick={() => navigate('/contribute')}
				className='bttn--primary filter__button'
			>
				Suggest Resources
			</button>
			<div className='filter__title-wrapper'>
				<div className='filter__title'>
					<img src={FilterIcon} alt='filter icon' />
					<p className='body-large bold'>Filter Results</p>
				</div>
				<div
					className={
						formatList.length !== 0 ||
						contList.length !== 0 ||
						catList.length !== 0
							? 'filter__chip'
							: 'filter__chip filter__chip-inactive'
					}
					onClick={resetChecked}
				>
					Clear
				</div>
			</div>
			<div className='checkbox-list-wrapper'>
				<CheckboxList
					category='Format'
					labels={format}
					checkedList={formatList}
					setCheckedList={setFormatList}
				/>
				<CheckboxList
					category='Continent'
					labels={continent}
					checkedList={contList}
					setCheckedList={setContList}
				/>
				<CheckboxList
					category='Category'
					labels={category}
					checkedList={catList}
					setCheckedList={setCatList}
				/>
			</div>
		</div>
	)
}

export default Filter
