import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';
//Este componente solo esta hecho para listarlos
export const CardList = (props) => {
	return (
		<div className="card-list">
			{props.monsters.map((monster) => {
				//retorna una nueva card por cada monster que existe
				return <Card key={monster.id} monster={monster} />;
			})}
		</div>
	);
};
