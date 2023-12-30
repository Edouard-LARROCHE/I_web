import React, { useState } from "react"

// import { useSelector } from "react-redux"

import { HiChevronRight } from "react-icons/hi2"

import Screen from "./screen"
import ActionButton from "./actionButton"

const IPodMini = () => {
	// const openDevice = useSelector(
	// 	(state) => state.confirmAnimation.confirmDevice,
	// )

	const text = ["M", "e", "n", "u"]
	const dataMenu = [
		"Playlists",
		"Artists",
		"Songs",
		"Genres",
		"Settings",
		"About",
	]
	const [selectedCategory, setSelectedCategory] = useState(dataMenu[0])

	const updateSelectedCategory = (delta) => {
		const currentIndex = dataMenu.indexOf(selectedCategory)
		const newIndex =
			(currentIndex + delta + dataMenu.length) % dataMenu.length
		setSelectedCategory(dataMenu[newIndex])
	}

	return (
		// <div className={`ipod-mini ${openDevice ? "small" : ""}`}>
		// 	<div className="screen">
		// 		<Screen />
		// 		{/* <h1 className="text-2xl font-bold mb-4">iPod Mini</h1>
		// 		<p className="text-sm">Description de l'appareil.</p> */}
		// 	</div>
		// 	<div className="button"></div>
		// 	<div className="central-button"></div>
		// </div>
		<div className="container">
			<div className="ipod small">
				<Screen
					dataMenu={dataMenu}
					selectedCategory={selectedCategory}
					updateSelectedCategory={updateSelectedCategory}
					icon={
						<HiChevronRight
							style={{
								strokeWidth: "2px",
							}}
						/>
					}
				/>
				<div className="outer-ring">
					<div className="btn-menu">
						{text.map((letter, i) => (
							<span key={i} className={`char${i}`}>
								{letter}
							</span>
						))}
					</div>
					<ActionButton
						updateSelectedCategory={updateSelectedCategory}
					/>
				</div>
			</div>
		</div>
	)
}

export default IPodMini
