import React from "react"
// import PropTypes from "prop-types"
import { useDispatch } from "react-redux"

import { setDeviceSelected } from "../store/reducer/device"

export const SwitchDeviceNav = () => {
	const dispatch = useDispatch()

	function onClick(value) {
		if (value === "ipod") return dispatch(setDeviceSelected("ipod"))
		if (value === "iphone") return dispatch(setDeviceSelected("iphone"))
	}

	return (
		<div className="nav">
			<div>
				<p onClick={() => onClick("ipod")}>Ipod</p>
			</div>
			<div>
				<p onClick={() => onClick("iphone")}>Iphone</p>
			</div>
		</div>
	)
}

// SwitchDeviceNav.propTypes = {
// 	shrinkageDisappearanceIPod: PropTypes.func,
// }
