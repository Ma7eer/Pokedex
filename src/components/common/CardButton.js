import React from 'react';
import PropTypes from 'prop-types';

const CardButton = (props) => {
  const { homePath, onClick, onDelete } = props;
  if(homePath) {
    return (
      <button
        onClick={onClick}
        type="button"
        className="btn btn-primary mt-3">Add to list</button>
    );
  } else {
    return (
      <button
        onClick={onDelete}
        type="button"
        className="btn btn-danger mt-3">Delete</button>
    );
  }
}

CardButton.propTypes = {
  homePath: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func
}


export default CardButton;