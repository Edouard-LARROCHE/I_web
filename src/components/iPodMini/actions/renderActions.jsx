import React from "react"
import PropTypes from "prop-types"

import { useSelector } from "react-redux"

const RenderActions = ({ renderMenuSelected }) => {
	const screenOpened = useSelector((state) => state?.device?.openScreen)

	const action = () => {
		renderMenuSelected()
	}

	return (
		<>
			{screenOpened ? (
				<div className="center-button" onClick={action}></div>
			) : null}
		</>
	)
}

export default RenderActions

RenderActions.propTypes = {
	renderMenuSelected: PropTypes.func,
}
