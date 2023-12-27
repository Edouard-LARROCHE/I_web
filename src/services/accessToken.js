/* eslint-disable camelcase */
const getAccessToken = async () => {
	try {
		const response = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				grant_type: "client_credentials",
				client_id: process.env.REACT_APP_CLIENT_ID,
				client_secret: process.env.REACT_APP_CLIENT_SECRET,
			}),
		})

		if (!response.ok) {
			throw new Error("Erreur lors de la récupération du token d'accès")
		}

		const data = await response.json()
		return data.access_token
	} catch (error) {
		console.error(error)
		throw error
	}
}

export default getAccessToken
