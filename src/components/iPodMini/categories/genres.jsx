import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { FaApple } from "react-icons/fa"

import getGenreSeeds from "../../../services/getGenreSeeds"

const Genres = () => {
	const token = useSelector((state) => state.userInfo?.token)
	const [genreData, setGenreData] = useState(null)

	useEffect(() => {
		const fetchGenreData = async () => {
			try {
				const data = await getGenreSeeds(token)
				setGenreData(data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchGenreData()
	}, [])

	return (
		<div className={!genreData ? "menu-options" : "loading"}>
			{!genreData ? (
				<FaApple />
			) : (
				Object.keys(genreData).map((key, i) => (
					<div key={i}>
						{key}: {genreData[key]}
					</div>
				))
			)}
		</div>
	)
}

export default Genres
