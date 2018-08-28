import React from 'react';

const CardButton = (props) => {
  if(props.homePath) {
    return (
      <button onClick={props.onClick} type="button" className="btn btn-primary mt-3">Add to list</button>
    );
  } else {
    return (
      <button onClick={props.onDelete} type="button" className="btn btn-danger mt-3">Delete</button>
    );
  }
}


export default CardButton;