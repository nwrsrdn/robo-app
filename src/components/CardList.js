import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, index) => {
    return (
      <Card
        key={ index }
        id={ robot.id }
        name={ robot.name }
        username={ robot.username }
        email={ robot.email }
      />
    )
  })

  return (
    <div>
      { cardComponent }
    </div>
  );
}

export default CardList;