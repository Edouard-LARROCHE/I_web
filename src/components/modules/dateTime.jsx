import React, { useState, useEffect } from "react"

const DateTime = () => {
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
		<div className="number-hour">{`${times.toLocaleTimeString(
			"fr-FR",
			optionsTime,
		)}`}</div>
	)
}

export default DateTime
