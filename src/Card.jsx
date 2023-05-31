/* eslint-disable react/prop-types */

import './styles/card.css'

const Card = ({ favAnimal, name, typePet, fanDogs }) => {
  return (
    <div className="card-container">
      <h2>Resumen</h2>
      <p>{favAnimal}</p>
      <p>{name}</p>
      <p>{typePet}</p> 
      <p>{ fanDogs ? 'Si le gustan los perros' : 'No le gustan los perros'}</p>
    </div>
  );
}

export default Card;