import React from "react"

import { useSelector, useDispatch } from "react-redux"

import { setLocationScreen } from "../../store/reducer/device"
import CentralButton from "./centralButton"

const ActionButton = () => {
	const dispatch = useDispatch()
	const locationScreen = useSelector((state) => state.device.locationScreen)

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
			<div className="touch-wheel">
				<CentralButton />
			</div>
		</>
	)
}

export default ActionButton
