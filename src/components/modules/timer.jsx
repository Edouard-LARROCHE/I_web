import React, { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import BatteryStatus from "./batteryStatus"
import { setOpenScreen, setBatteryLevel } from "../../store/reducer/device"

const TimerComponent = () => {
	const dispatch = useDispatch()

	const timer = useSelector((state) => state.device?.batteryLevel)
	const screenOpened = useSelector((state) => state.device?.openScreen)
	const [pausedTimerValue, setPausedTimerValue] = useState(null)

	useEffect(() => {
		let timerInterval

		if (screenOpened && timer > 0) {
			if (pausedTimerValue !== null) {
				dispatch(setBatteryLevel(pausedTimerValue))
				setPausedTimerValue(null)
			} else {
				// dispatch(SET_BATTERY_LEVEL(timer))
			}

			timerInterval = setInterval(() => {
				dispatch(setBatteryLevel(Math.max(timer - 1, 0)))
			}, 60000)
		} else {
			setPausedTimerValue(timer)
			clearInterval(timerInterval)
		}

		return () => {
			clearInterval(timerInterval)
		}
	}, [screenOpened, timer, pausedTimerValue, dispatch])

	useEffect(() => {
		if (timer === 0) {
			return dispatch(setOpenScreen(false))
		}
	}, [screenOpened, timer])

	return (
		<div>
			<BatteryStatus percentage={timer} />
		</div>
	)
}

export default TimerComponent
