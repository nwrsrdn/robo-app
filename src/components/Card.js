import React from "react";

const Card = (props) => {
  const { name, username, email } = props;
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={ `https://robohash.org/${ username }?200x200` } alt={`Robot face of ${ username }`} />
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  );
}

export default Card;