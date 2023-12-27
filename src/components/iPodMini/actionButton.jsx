import React from "react"

import { useDispatch } from "react-redux"

import { setOpenScreen } from "../../store/reducer/device"
import CentralButton from "./centralButton"

const ActionButton = () => {
	const dispatch = useDispatch()

	const handleReturn = () => {
		dispatch(setOpenScreen(false))
	}

	return (
		<>
			<div className="skip forward"></div>
			<div className="skip back" onClick={handleReturn}></div>
			<div className="play-pause"></div>
			<div className="touch-wheel">
				<CentralButton />
			</div>
		</>
	)
}

export default ActionButton
