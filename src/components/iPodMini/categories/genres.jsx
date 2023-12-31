import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { useSelector, useDispatch } from "react-redux"

import { FaApple } from "react-icons/fa"

import { setMenu } from "../../../store/reducer/dataMenu"
import getGenreSeeds from "../../../services/getGenreSeeds"

const Genres = (props) => {
	const dispatch = useDispatch()

	const token = useSelector((state) => state.user?.token)
	const location = useSelector(
		(state) => state.device.locationScreen.location,
	)
	const level = useSelector((state) => state.device.locationScreen.level)
	const dataMenu = useSelector((state) => state.menu?.dataMenu?.genres)
	const [genreData, setGenreData] = useState(null)
	const [loader, setLoader] = useState(null)

	useEffect(() => {
		const fetchGenreData = async () => {
			try {
				const data = await getGenreSeeds(token)
				setGenreData(data)
			} catch (error) {
				console.error(error)
				setLoader(<FaApple />)
			}
		}
		fetchGenreData()
	}, [])

	useEffect(() => {
		if (location === "Genres" && level === 1 && genreData !== null) {
			dispatch(setMenu(genreData))
		} else if (genreData !== null) dispatch(setMenu([]))
	}, [location, genreData, level])

	return (
		<div
			className={
				dataMenu !== null ? "menu-options under-menu" : "loading"
			}
		>
			{dataMenu === null || dataMenu === undefined ? (
				<FaApple /> || loader
			) : (
				<div>
					{dataMenu &&
						dataMenu.map((item, i) => (
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
