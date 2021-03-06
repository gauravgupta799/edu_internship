import React from "react";
import "./QuickSearch.css";
import { Link } from "react-router-dom";

const QuickSearch = (props) => {
	const listMeal = ({ quickData }) => {
		if (quickData) {
			return quickData.map((item) => {
				return (
					<Link to={`/list/${item.mealtype_id}`}>
						<div className='tileContainer' key={item._id}>
							<div className='tileComponent1'>
								<img src={item.meal_image} alt='breakfast' />
							</div>
							<div className='tileComponent2'>
								<div className='componentHeading'>{item.mealtype}</div>
								<div className='componentSubHeading'>{item.content}</div>
							</div>
						</div>
					</Link>
				);
			});
		}
	};

	return (
		<div id='quickSearch'>
			<div id='quickHeading'>
				<p>Quick Search</p>
			</div>
			<div id='quickSubHeading'>
				<p>Discover Restaurants by type of meal</p>
			</div>
			<div id='mainTileContainer'>{listMeal(props)}</div>
		</div>
	);
};

export default QuickSearch;
