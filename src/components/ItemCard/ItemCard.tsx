import './ItemCard.css';
import React from 'react';

interface ItemCardProps {
	id: string;
	name: string;
	img: string;
	price: number;
}

const ItemCard = (props: ItemCardProps) => {
	return (
		<div className='item-card'>
			<img
				className='card__img'
				src={props.img}
				alt={props.name + ' pizza'}
			/>
			<h2 className='card__title'>
				{props.name} <span className='card__item-id'>{props.id}</span>
			</h2>
			<h2 className='card__price'>${props.price}</h2>
		</div>
	);
};

export default ItemCard;
