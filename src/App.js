import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setToken } from "./store/reducer/user"

import getAccessToken from "./services/accessToken"
import IPodMini from "./components/iPodMini/iPodMini"

function App() {
	const dispatch = useDispatch()
	const token = useSelector((state) => state?.user?.token)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = await getAccessToken()
				dispatch(setToken(token))
			} catch (error) {
				console.log("Error: ", error)
			}
		}

		fetchData()
	}, [dispatch])

	return <div id="mContainer">{token ? <IPodMini /> : "LOADING"}</div>
}

export default App
