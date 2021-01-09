import React, { useState } from "react";

export function Home() {
	const [color, setColor] = useState(null);
	return (
		<div>
			<div className="hangingRod mx-auto" />

			<div className="trafficLight mx-auto d-flex flex-column align-items-center justify-content-center">
				<div
					className={
						color === "red" ? "red selected light" : "red light"
					}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow"
							? "yellow selected light"
							: "yellow light"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green"
							? "green selected light"
							: "green light"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
}
