import React, { useState, useRef } from "react"

import { HiChevronRight } from "react-icons/hi2"

import Screen from "./screen"
import ActionButton from "./actionButton"

const IPodMini = () => {
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
	const [renderComponant, setRenderComponant] = useState(false)
	const accumulatedDeltaRef = useRef(0)

	const updateSelectedCategory = (delta) => {
		const factor = 0.1
		accumulatedDeltaRef.current += delta * factor

		const scrollThreshold = 1

		if (Math.abs(accumulatedDeltaRef.current) >= scrollThreshold) {
			const currentIndex = dataMenu.indexOf(selectedCategory)
			const newIndex =
				(currentIndex +
					Math.sign(accumulatedDeltaRef.current) +
					dataMenu.length) %
				dataMenu.length
			setSelectedCategory(dataMenu[newIndex])
			accumulatedDeltaRef.current = 0
		}
	}

	// console.log(renderComponant, "renderComponant")

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
					renderComponant={renderComponant}
					setRenderComponant={setRenderComponant}
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
						dataMenu={dataMenu}
						selectedCategory={selectedCategory}
						updateSelectedCategory={updateSelectedCategory}
						setRenderComponant={setRenderComponant}
					/>
				</div>
			</div>
		</div>
	)
}

export default IPodMini
