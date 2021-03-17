import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card";

export const Home = () => {
	let planets = [
		{ nombre: "Saturno", superficie: 1000 },
		{ nombre: "Júpiter", superficie: 2000 },
		{ nombre: "Marte", superficie: 3000 },
		{ nombre: "Tierra", superficie: 4000 }
	];

	return (
		<div className="text-center mt-5">
			<h1>Home</h1>
			<div className="row">
				{planets.map((item, index) => {
					return (
						<div className="col" key={index}>
							<Card Key={index} nombre={item.nombre} superficie={item.superficie} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
