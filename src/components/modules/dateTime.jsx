import React, { useState, useEffect } from "react"

const dateTime = () => {
	const [times, setTimes] = useState(new Date())

	let optionsTime = {
		hour: "2-digit",
		minute: "2-digit",
	}

	useEffect(() => {
		const hour = setInterval(() => setTimes(new Date()), 1000)
		return () => {
			clearInterval(hour)
		}
	}, [])

	return (
		<div className="border h-4/5 mx-1 cursor-grab ">
			<div className="">
				{/* <Battery /> */}
				<div className="flex justify-center relative">
					<div className="text-xm relative top-[-23px]">{`${times.toLocaleTimeString(
						"fr-FR",
						optionsTime,
					)}`}</div>
				</div>
			</div>
		</div>
	)
}

export default dateTime
