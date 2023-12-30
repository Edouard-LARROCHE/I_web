import React, { useState, useRef } from "react"
import PropTypes from "prop-types"

import { useSelector, useDispatch } from "react-redux"

import { setLocationScreen } from "../../store/reducer/device"
import CentralButton from "./centralButton"

const ActionButton = ({
	updateSelectedCategory,
	dataMenu,
	selectedCategory,
	setRenderComponant,
}) => {
	const dispatch = useDispatch()
	const locationScreen = useSelector((state) => state.device.locationScreen)
	const screenOpened = useSelector((state) => state.device.openScreen)

	const [isMouseDown, setIsMouseDown] = useState(false)
	const touchWheelRef = useRef(null)

	const handleMouseDown = () => {
		if (!screenOpened) return
		setIsMouseDown(true)
	}

	const handleMouseMove = (e) => {
		if (!screenOpened) return
		if (isMouseDown) {
			const delta = e.movementX || e.movementY
			updateSelectedCategory(delta)
		}
	}

	const handleMouseUp = () => {
		if (!screenOpened) return
		setIsMouseDown(false)
	}

	const handleReturn = () => {
		if (
			locationScreen &&
			locationScreen !== null &&
			locationScreen !== "menu"
		) {
			dispatch(setLocationScreen(""))
		}
	}

	return (
		<>
			<div className="skip forward"></div>
			<div className="skip back" onClick={handleReturn}></div>
			<div className="play-pause"></div>
			<div
				className="touch-wheel"
				ref={touchWheelRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<CentralButton
					dataMenu={dataMenu}
					selectedCategory={selectedCategory}
					setRenderComponant={setRenderComponant}
				/>
			</div>
		</>
	)
}

export default ActionButton

ActionButton.propTypes = {
	updateSelectedCategory: PropTypes.func,
	dataMenu: PropTypes.array,
	selectedCategory: PropTypes.string,
	setRenderComponant: PropTypes.func,
}
