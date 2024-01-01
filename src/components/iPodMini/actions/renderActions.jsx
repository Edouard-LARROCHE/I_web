import React from "react"
import PropTypes from "prop-types"

import { useDispatch } from "react-redux"

import { setLocationScreen } from "../../../store/reducer/device"

const RenderActions = ({ renderMenuSelected, selectedCategory }) => {
	const dispatch = useDispatch()

	const action = () => {
		renderMenuSelected()
		if (selectedCategory) {
			dispatch(
				setLocationScreen({ location: selectedCategory, level: 1 }),
			)
		}
	}

	return (
		<>
			<div className="center-button" onClick={action}></div>
		</>
	)
}

export default RenderActions

RenderActions.propTypes = {
	renderMenuSelected: PropTypes.func,
	selectedCategory: PropTypes.string,
}
