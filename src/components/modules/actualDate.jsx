import React from "react"

const ActualDate = () => {
	const actualDate = new Date()
	const daysWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
	const monthYear = [
		"janv",
		"févr",
		"mars",
		"avr",
		"mai",
		"juin",
		"juil",
		"août",
		"sept",
		"oct",
		"nov",
		"déc",
	]

	const dayWeek = daysWeek[actualDate.getDay()]
	const dayMonth = actualDate.getDate()
	const month = monthYear[actualDate.getMonth()]

	const dateFormatee = `${dayWeek}. ${dayMonth} ${month}.`

	return (
		<div>
			<p>{dateFormatee}</p>
		</div>
	)
}

export default ActualDate
