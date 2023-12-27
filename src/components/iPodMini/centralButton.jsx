"use client"
import React, { useState, useRef } from "react"

import { useDispatch, useSelector } from "react-redux"

import { setOpenScreen } from "../../store/reducer/device"

const CentralButton = () => {
	const dispatch = useDispatch()

	const screenOpened = useSelector(
		(state) => state?.deviceSelected?.openScreen,
	)

	const [openedScreen, setOpenedScreen] = useState(false)
	const pressDurationThreshold = 2000
	const timeoutRef = useRef(null)

	const handleMouseDown = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenedScreen(true)
			dispatch(setOpenScreen(!screenOpened))
		}, pressDurationThreshold)
	}

	const handleMouseUp = () => {
		clearTimeout(timeoutRef.current)

		if (openedScreen) {
			setTimeout(() => {
				setOpenedScreen(false)
			}, pressDurationThreshold)
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
			></div>
		</>
	)
}

export default CentralButton
