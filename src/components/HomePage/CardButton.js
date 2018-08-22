import React from 'react';

const CardButton = (props) => {
    return (
      <button onClick={props.onClick} type="button" className="btn btn-primary mt-3">Add to list</button>
    );
}


export default CardButton;