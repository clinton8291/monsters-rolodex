import React from 'react'
import './CardList.styles.css';
import Card from '../card/Card.component.jsx';

const CardList = ({monsters}) => {
    return (
        <div className='card-list'>
          {monsters.map((monster) => {
            return <Card {...monster}/>; //Pass all props using destructuring
          })}
        </div>
    )
}

export default CardList;
