import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { useSelector, useDispatch } from "react-redux"

import { FaApple } from "react-icons/fa"

import { setMenu } from "../../../store/reducer/dataMenu"
// import getGenreSeeds from "../../../services/getGenreSeeds"

const Genres = ({ icon, selectedCategory, setSelectedCategory }) => {
	const dispatch = useDispatch()

	// const token = useSelector((state) => state.user?.token)
	const location = useSelector(
		(state) => state.device.locationScreen.location,
	)
	const level = useSelector((state) => state.device.locationScreen.level)
	const dataMenu = useSelector((state) => state.menu.dataMenu)
	const [genreData, setGenreData] = useState(null)
	const [loader, setLoader] = useState(null)

	const fakeData = {
		genres: ["rock", "rap", "ntm"],
	}

	useEffect(() => {
		const fetchGenreData = async () => {
			try {
				// const data = await getGenreSeeds(token)
				const data = fakeData
				setGenreData(data)
			} catch (error) {
				console.error(error)
				setLoader(<FaApple />)
			}
		}
		fetchGenreData()
	}, [])

	useEffect(() => {
		const updateDataMenu = async () => {
			if (
				location === "Genres" &&
				level === 1 &&
				genreData !== null &&
				genreData.genres.length > 0
			) {
				dispatch(setMenu({ genres: genreData }))
				if (
					location === "Genres" &&
					level === 1 &&
					dataMenu.length > 0 &&
					!selectedCategory
				) {
					setSelectedCategory(dataMenu[0])
				}
			}
		}

		updateDataMenu()
	}, [
		genreData,
		dataMenu,
		location,
		level,
		dispatch,
		selectedCategory,
		setSelectedCategory,
	])

	useEffect(() => {
		console.log(selectedCategory, "selectedCategory")
	}, [selectedCategory])

	// useEffect(() => {
	// 	if (location === "Genres" && level === 1 && dataMenu.length > 0) {
	// 		// Mise à jour de selectedCategory uniquement si c'est la première fois
	// 		// que le composant Genres est rendu
	// 		if (selectedCategory) {
	// 			setSelectedCategory(dataMenu[0])
	// 		}
	// 	}
	// }, [dataMenu, location, level, selectedCategory, setSelectedCategory])

	return (
		<div className={dataMenu ? "menu-options under-menu" : "loading"}>
			{dataMenu === null || dataMenu === undefined ? (
				<FaApple /> || loader
			) : (
				<div>
					{dataMenu.length > 0 &&
						dataMenu.map((item, i) => (
							<div
								key={i}
								className={`option ${
									item === selectedCategory ? "selected" : ""
								}`}
							>
								{item} {icon}
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
	selectedCategory: PropTypes.string,
	setSelectedCategory: PropTypes.func,
}
