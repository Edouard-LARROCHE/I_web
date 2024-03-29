import React, { useEffect, useState, useRef } from "react"

import { useDispatch, useSelector } from "react-redux"

import { updateSelectedCategory } from "../utils/generalUtils"
import { setLocationScreen } from "../../store/reducer/device"
import { setMenu } from "../../store/reducer/dataMenu"
import { HiChevronRight } from "react-icons/hi2"

import Screen from "./screen"
import ActionButton from "./actions/actionButton"

const IPodMini = () => {
	const dispatch = useDispatch()

	const location = useSelector(
		(state) => state.device.locationScreen.location,
	)
	const level = useSelector((state) => state.device.locationScreen.level)
	const openScreen = useSelector((state) => state.device.openScreen)
	const dataMenu = useSelector((state) => state.menu.dataMenu)

	const text = ["M", "e", "n", "u"]
	const dataMenuBase = [
		"Playlists",
		"Artists",
		"Songs",
		"Genres",
		"Settings",
		"About",
	]
	const [selectedCategory, setSelectedCategory] = useState(dataMenuBase[0])
	const [renderComponant, setRenderComponant] = useState(false)
	const [returnMenuBase, setReturnMenuBase] = useState(false)
	const accumulatedDeltaRef = useRef(0)
	const selectedCategoryRef = useRef(dataMenu[0])

	useEffect(() => {
		if (!openScreen || (level === 0 && location === "menu")) {
			dispatch(setMenu(dataMenuBase))
		}
	}, [location])

	const updateSelectedCategoryHandler = (delta) => {
		updateSelectedCategory(
			delta,
			accumulatedDeltaRef,
			dataMenu,
			selectedCategoryRef.current,
			(newSelectedCategory) => {
				selectedCategoryRef.current = newSelectedCategory
				setSelectedCategory(newSelectedCategory)
			},
		)
	}

	const backMenu = () => {
		if (location && location !== "menu" && level === 1) {
			dispatch(setLocationScreen({ location: "menu", level: 0 }))
			setReturnMenuBase(true)
		} else setReturnMenuBase(false)
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
					setSelectedCategory={setSelectedCategory}
					updateSelectedCategory={updateSelectedCategoryHandler}
					renderComponant={renderComponant}
					setRenderComponant={setRenderComponant}
					returnMenuBase={returnMenuBase}
					setReturnMenuBase={setReturnMenuBase}
					location={location}
					icon={
						<HiChevronRight
							style={{
								strokeWidth: "2px",
							}}
						/>
					}
				/>
				<div className="outer-ring">
					<div className="btn-menu" onClick={backMenu}>
						{text.map((letter, i) => (
							<span key={i} className={`char${i}`}>
								{letter}
							</span>
						))}
					</div>
					<ActionButton
						dataMenu={dataMenuBase}
						selectedCategory={selectedCategory}
						updateSelectedCategory={updateSelectedCategoryHandler}
						setRenderComponant={setRenderComponant}
						setReturnMenuBase={setReturnMenuBase}
					/>
				</div>
			</div>
		</div>
	)
}

export default IPodMini
