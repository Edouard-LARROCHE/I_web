import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { useSelector } from "react-redux"

import TimerComponent from "../modules/timer"
import NoBattery from "../modules/noBattery"
import CategoryComponent from "./categories/index"

import { IoMdPlay } from "react-icons/io"

const Screen = (props) => {
	const screenOpened = useSelector((state) => state.device.openScreen)
	const timer = useSelector((state) => state.device?.batteryLevel)
	const location = useSelector(
		(state) => state.device.locationScreen.location,
	)

	useEffect(() => {
		props.updateSelectedCategory(0)
	}, [props])

	useEffect(() => {
		if (location === "menu") {
			props.setReturnMenuBase(false)
		}
	}, [props])

	return (
		<div className="screen">
			{!screenOpened && timer === 0 ? (
				<NoBattery screenOpened={screenOpened} timer={timer} />
			) : (
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
					{props.renderComponant &&
					screenOpened &&
					props.returnMenuBase &&
					props.selectedCategory ? (
						<CategoryComponent
							category={props.selectedCategory}
							icon={props.icon}
						/>
					) : (
						<div className="menu-options">
							{screenOpened
								? props.dataMenu.map((items, i) => (
										<div
											key={i}
											className={`option ${
												items === props.selectedCategory
													? "selected"
													: ""
											}`}
										>
											{items} {props.icon}
										</div>
									))
								: null}
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default Screen

Screen.propTypes = {
	icon: PropTypes.object,
	dataMenu: PropTypes.array,
	updateSelectedCategory: PropTypes.func,
	selectedCategory: PropTypes.string,
	renderComponant: PropTypes.bool,
	setRenderComponant: PropTypes.func,
	returnMenuBase: PropTypes.bool,
	setReturnMenuBase: PropTypes.func,
}
