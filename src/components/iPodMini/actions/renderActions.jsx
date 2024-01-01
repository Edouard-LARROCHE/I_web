import React from "react"
import PropTypes from "prop-types"

const RenderActions = ({ renderMenuSelected }) => {
	const action = () => {
		renderMenuSelected()
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
}
