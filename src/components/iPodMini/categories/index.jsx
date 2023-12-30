import React from "react"
import PropTypes from "prop-types"

import Genres from "./genres"

const CategoryComponent = ({ category }) => {
	const components = {
		Playlists: <div>Playlists Component</div>,
		Artists: <div>Artists Component</div>,
		Songs: <div>Songs Component</div>,
		Genres: <Genres />,
		Settings: <div>Settings Component</div>,
		About: <div>About Component</div>,
	}

	return components[category] || null
}

export default CategoryComponent

CategoryComponent.propTypes = {
	category: PropTypes.string,
}
