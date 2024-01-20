export const updateSelectedCategory = (
	delta,
	accumulatedDeltaRef,
	dataMenu,
	selectedCategory,
	setSelectedCategoryCallback,
) => {
	const factor = 0.1
	accumulatedDeltaRef.current += delta * factor

	const scrollThreshold = 1

	if (Math.abs(accumulatedDeltaRef.current) >= scrollThreshold) {
		const currentIndex = dataMenu.indexOf(selectedCategory)
		const newIndex =
			(currentIndex +
				Math.sign(accumulatedDeltaRef.current) +
				dataMenu.length) %
			dataMenu.length

		setSelectedCategoryCallback(dataMenu[newIndex])
		accumulatedDeltaRef.current = 0
	}
}
