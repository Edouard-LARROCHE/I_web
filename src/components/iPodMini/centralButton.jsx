import React, { useState, useRef, useCallback } from "react"
import PropTypes from "prop-types"

import { useDispatch, useSelector } from "react-redux"

import { setOpenScreen, setLocationScreen } from "../../store/reducer/device"

const CentralButton = (props) => {
	const dispatch = useDispatch()

	const screenOpened = useSelector((state) => state?.device?.openScreen)

	const [openedScreen, setOpenedScreen] = useState(false)
	const [openingScreenClick, setOpeningScreenClick] = useState(false)
	const pressDurationThreshold = 2000
	const timeoutRef = useRef(null)

	const handleMouseDown = useCallback(() => {
		setOpeningScreenClick(!openedScreen)

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
	}, [dispatch, openedScreen, screenOpened, pressDurationThreshold])

	const handleMouseUp = () => {
		clearTimeout(timeoutRef.current)

		setTimeout(() => {
			if (openedScreen && !openingScreenClick) {
				setOpenedScreen(true)
			} else {
				setOpenedScreen(false)
			}
		}, pressDurationThreshold)
	}

	const renderMenuSelected = () => {
		if (screenOpened) {
			if (!openedScreen && openingScreenClick) {
				props.setRenderComponant(true)
			} else if (!openedScreen) {
				props.setRenderComponant(false)
			}
		}
	}

	return (
		<>
			<div
				className="center-button"
				onClick={renderMenuSelected}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onTouchStart={handleMouseDown}
				onTouchEnd={handleMouseUp}
			></div>
		</>
	)
}

export default CentralButton

CentralButton.propTypes = {
	selectedCategory: PropTypes.string,
	setRenderComponant: PropTypes.func,
}
