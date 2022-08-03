import React from "react";

export default function Shop(props) {

	const {img, rating, reviewCount, country, title, price} = props

	return (
		
			<div className="shop-item">
				<img src={img} />
				<p>
					<img className="star" src="../Star.svg" />
					<small className="light-text">{parseFloat(rating)} ({reviewCount}) • </small>

					<span className="light-text">{country}</span>
					<p className="fw-300">{title}</p>
				</p>
				<h5>
					From ${price} / <span className="fw-300">per person</span>
				</h5>
			</div>
	);
}
