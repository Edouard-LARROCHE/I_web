const getGenreSeeds = async (token) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/recommendations/available-genre-seeds`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization: `Bearer ${token}`,
				},
			},
		)

		if (!response.ok) {
			throw new Error(`Erreur lors de la requête: ${response.statusText}`)
		}

		const data = await response.json()
		return data
	} catch (error) {
		console.error("Erreur:", error)
	}
}

export default getGenreSeeds
