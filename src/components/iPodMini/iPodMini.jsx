import React from "react"

// import { useSelector } from "react-redux"

import { HiChevronRight } from "react-icons/hi2"

import Screen from "./screen"
import ActionButton from "./actionButton"

const IPodMini = () => {
	// const openDevice = useSelector(
	// 	(state) => state.confirmAnimation.confirmDevice,
	// )
	const menu = ["M", "e", "n", "u"]

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
						{menu.map((letter, i) => (
							<span key={i} className={`char${i}`}>
								{letter}
							</span>
						))}
					</div>
					<ActionButton />
				</div>
			</div>
		</div>
	)
}

export default IPodMini
