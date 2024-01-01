import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { useSelector } from "react-redux"

import { FaApple } from "react-icons/fa"

import getGenreSeeds from "../../../services/getGenreSeeds"

const Genres = (props) => {
	const token = useSelector((state) => state.user?.token)
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
		<div
			className={
				genreData !== null ? "menu-options under-menu" : "loading"
			}
		>
			{genreData === null ? (
				<FaApple />
			) : (
				<div>
					{genreData.genres.map((item, i) => (
						<div key={i} className="option">
							{item} {props.icon}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Genres

Genres.propTypes = {
	icon: PropTypes.object,
}
