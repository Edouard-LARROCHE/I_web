import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

const BatteryStatus = ({ percentage, isSmall }) => {
	const [blinkVisible, setBlinkVisible] = useState(true)
	const tileFirst = useRef()
	const tileMiddle = useRef()
	const tileLast = useRef()

	useEffect(() => {
		let blinkInterval

		if (percentage < 10) {
			blinkInterval = setInterval(() => {
				setBlinkVisible((prevVisible) => !prevVisible)
			}, 300)
		} else {
			setBlinkVisible(true)
			clearInterval(blinkInterval)
		}

		return () => {
			clearInterval(blinkInterval)
		}
	}, [percentage])

	const batteryStyle = {
		transform: `scale(${isSmall ? 0.3 : 1}, ${isSmall ? 0.3 : 1})`,
		transformOrigin: "100% 25%",
	}

	const tileFirstStyle = {
		opacity: percentage <= 75 ? "0" : "1",
	}

	const tileMiddleStyle = {
		opacity: percentage <= 35 ? "0" : "1",
	}

	const tileLastStyle = {
		opacity: percentage === 0 ? "0" : blinkVisible ? "1" : "0",
	}

	return (
		<div
			className={`battery ${isSmall ? "small" : ""}`}
			style={batteryStyle}
		>
			<div className="battery-level">
				<div
					className="tile"
					ref={tileLast}
					style={tileLastStyle}
				></div>
				<div
					className="tile"
					ref={tileMiddle}
					style={tileMiddleStyle}
				></div>
				<div
					className="tile"
					ref={tileFirst}
					style={tileFirstStyle}
				></div>
			</div>
		</div>
	)
}

export default BatteryStatus

BatteryStatus.propTypes = {
	percentage: PropTypes.number,
	isSmall: PropTypes.bool,
}
