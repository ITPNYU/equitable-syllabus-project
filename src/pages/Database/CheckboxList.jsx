import React from 'react'
import { useState } from 'react'
import UpIcon from '../../icons/up.svg'
import DownIcon from '../../icons/down.svg'

function CheckboxList({ category, labels, checkedList, setCheckedList }) {
	const [open, setOpen] = useState(true)

	const toggle = () => {
		setOpen((prev) => !prev)
	}

	function handleChange(event) {
		const { value, checked } = event.target

		if (checked) {
			setCheckedList((checkedList) => [...checkedList, value])
		} else {
			setCheckedList(checkedList.filter((item) => item !== value))
		}
	}

	return (
		<div className='checkbox-list'>
			<div className='checkbox-list__title' onClick={toggle}>
				<h5 className='body-default'>{category}</h5>
				<img
					src={open ? UpIcon : DownIcon}
					alt={open ? 'Collapse list' : 'Expand list'}
				/>
			</div>
			<div className={open ? 'checkbox-wrapper' : 'checkbox-wrapper--hidden'}>
				{labels.map((item, index) => {
					return (
						<div className='checkbox' key={index} onChange={handleChange}>
							<label className='body-default'>
								{item}
								<input
									className={
										checkedList.includes(item)
											? 'checkbox__icon checkbox__icon--checked'
											: 'checkbox__icon'
									}
									type='checkbox'
									value={item}
								/>
							</label>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CheckboxList
