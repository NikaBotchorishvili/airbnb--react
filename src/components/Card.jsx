import React from "react";

export default function Shop(props) {
	const {id, openSpots, img, rating, reviewCount, country, title, price, status} = props.item
	let badgeTxt;
	if(openSpots === 0 ){
		console.log(openSpots)
		badgeTxt = "SOLD OUT";
	}else if(status == "Online"){
		badgeTxt = "Online";
	}

	return (
		
			<div className="card-item">
				<img src={img} />
				{badgeTxt && <div className="card--badge">{badgeTxt}</div>}
				<div>
					<img className="star" src="../images/Star.svg" />
					<small className="light-text">{parseFloat(rating)} ({reviewCount}) • </small>

					<span className="light-text">{country}</span>
					<div className="fw-300">{title}</div>
				</div>
				<span>
					From ${price} / <span className="fw-300">per person</span>
				</span>
			</div>
	);
}
