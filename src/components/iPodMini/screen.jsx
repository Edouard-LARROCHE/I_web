import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { useSelector } from "react-redux"

import TimerComponent from "../modules/timer"
import Genres from "./categories/genres"
import NoBattery from "../modules/noBattery"

import { IoMdPlay } from "react-icons/io"

const Screen = (props) => {
	const screenOpened = useSelector((state) => state.device.openScreen)
	const timer = useSelector((state) => state.device?.batteryLevel)

	const [selectedCategory, setSelectedCategory] = useState(null)

	const dataMenu = [
		"Playlists",
		"Artists",
		"Songs",
		"Genres",
		"Settings",
		"About",
	]

	useEffect(() => {
		setSelectedCategory(dataMenu[0])
	}, [selectedCategory, dataMenu])

	const handleOptionClick = (index) => {
		setSelectedCategory(dataMenu[index])
	}

	return (
		<div className="screen">
			{!screenOpened && timer === 0 ? (
				<NoBattery screenOpened={screenOpened} timer={timer} />
			) : selectedCategory !== "Genres" ? (
				<>
					<div className={screenOpened ? "title-bar" : "noBorder"}>
						{screenOpened ? (
							<>
								<IoMdPlay />
								<div className="title">iPod</div>
								<TimerComponent />
							</>
						) : null}
					</div>
					<div className="menu-options">
						{screenOpened
							? dataMenu.map((items, i) => (
									<div
										key={i}
										className={`option ${
											items === selectedCategory
												? "selected"
												: ""
										}`}
										onClick={() => handleOptionClick(i)}
									>
										{items} {props.icon}
									</div>
								))
							: null}
					</div>
				</>
			) : (
				<Genres />
			)}
		</div>
	)
}

export default Screen

Screen.propTypes = {
	icon: PropTypes.object,
}
