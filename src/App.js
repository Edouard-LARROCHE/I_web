import React, { useEffect } from "react"
// import { gsap } from "gsap"
import { useDispatch, useSelector } from "react-redux"

import { setToken } from "./store/reducer/user"
import { userData } from "./store/reducer/user"

import getAccessToken from "./services/accessToken"
import { SwitchDeviceNav } from "./components/switchDeviceNav"
import IPodMini from "./components/iPodMini/iPodMini"
import { IPhone } from "./components/iPhone/iPhone"

function App() {
	const dispatch = useDispatch()
	const token = useSelector((state) => state?.user?.token)
	const deviceSelected = useSelector((state) => state.device.deviceSelected)

	useEffect(() => {
		if (deviceSelected === "ipod") {
			const fetchData = async () => {
				try {
					const token = await getAccessToken()
					dispatch(setToken(token))
				} catch (error) {
					console.log("Error: ", error)
				}
			}

			fetchData()
		}
	}, [dispatch, deviceSelected])

	useEffect(() => {
		renderComposant()
	}, [deviceSelected])

	function renderComposant() {
		if (token && deviceSelected === "ipod") {
			return <IPodMini />
		} else if (deviceSelected === "iphone") {
			if (token) {
				dispatch(userData.actions.resetUserState())
			}
			return <IPhone />
		} else return "Choice your device"
	}

	return (
		<div className="switch-device-nav">
			<SwitchDeviceNav />
			<div id="mContainer">{renderComposant()}</div>
		</div>
	)
}

export default App
