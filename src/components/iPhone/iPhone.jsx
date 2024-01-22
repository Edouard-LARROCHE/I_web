import React from "react"

import DateTime from "../modules/dateTime"
import ActualDate from "../modules/actualDate"

import { IoLockClosed } from "react-icons/io5"

export const IPhone = () => {
	return (
		<div className="outside-border">
			<div className="silencer"></div>
			<div className="volume-up"></div>
			<div className="volume-down"></div>
			<div className="button-on"></div>
			<div className="inside-border">
				<div className="camera">
					<div className="camera-dot">
						<div className="camera-dot-2"></div>
						<div className="camera-dot-3"></div>
					</div>
					<div className="camera-speaker"></div>
				</div>

				<div className="lock">
					<IoLockClosed />
				</div>

				<div className="date">
					<ActualDate />
				</div>

				<div className="time">
					<DateTime />
				</div>

				<div className="t-r-info">
					<div className="dots">...</div>
					<div className="battery">
						<div className="bar"></div>
						<div className="dot"></div>
					</div>
				</div>

				<div className="torch-outter">
					<div className="light"></div>
					<div className="top"></div>
					<div className="switch-top"></div>
					<div className="switch-section"></div>
					<div className="switch">
						<div className="dot"></div>
					</div>
				</div>

				<div className="camera-outter">
					<div className="box"></div>
					<div className="eye"></div>
					<div className="circle"></div>
					<div className="dot"></div>
				</div>

				<div className="bottom-line"></div>
			</div>
		</div>
	)
}
