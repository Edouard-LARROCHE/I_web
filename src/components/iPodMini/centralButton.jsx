import React, { useState, useRef } from "react"
import PropTypes from "prop-types"

import { useDispatch, useSelector } from "react-redux"

import { setOpenScreen, setLocationScreen } from "../../store/reducer/device"
import RenderActions from "./actions/renderActions"

const CentralButton = (props) => {
	const dispatch = useDispatch()

	const screenOpened = useSelector((state) => state?.device?.openScreen)

	const [openedScreen, setOpenedScreen] = useState(false)
	const pressDurationThreshold = 2000
	const timeoutRef = useRef(null)

	const handleMouseDown = () => {
		timeoutRef.current = setTimeout(() => {
			if (openedScreen) {
				setOpenedScreen(false)

				dispatch(setOpenScreen(false))
				dispatch(setLocationScreen(""))
			} else {
				setOpenedScreen(true)

				dispatch(setOpenScreen(!screenOpened))
				dispatch(setLocationScreen("menu"))
			}
		}, pressDurationThreshold)
	}

	const handleMouseUp = () => {
		clearTimeout(timeoutRef.current)

		setTimeout(() => {
			if (openedScreen) {
				setOpenedScreen(true)
			} else {
				setOpenedScreen(false)
			}
		}, pressDurationThreshold)
	}

	const renderMenuSelected = () => {
		if (openedScreen) {
			props.setRenderComponant(true)
		} else if (!openedScreen) {
			props.setRenderComponant(false)
		}
	}

	return (
		<>
			<div
				className="center-button"
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onTouchStart={handleMouseDown}
				onTouchEnd={handleMouseUp}
			>
				{screenOpened ? (
					<RenderActions renderMenuSelected={renderMenuSelected} />
				) : null}
			</div>
		</>
	)
}

export default CentralButton

CentralButton.propTypes = {
	selectedCategory: PropTypes.string,
	setRenderComponant: PropTypes.func,
}
