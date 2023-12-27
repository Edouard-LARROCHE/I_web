import React from "react"

// import { CiBatteryEmpty } from "react-icons/ci"
import { FcFlashOn } from "react-icons/fc"

const NoBattery = () => {
	return (
		<div className="no-battery">
			<FcFlashOn />
			{/* <CiBatteryEmpty /> */}
		</div>
	)
}

export default NoBattery
