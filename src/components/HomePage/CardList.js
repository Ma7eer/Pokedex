import React from 'react';
import PropTypes from 'prop-types';

import Card from '../common/Card';

const CardList = (props) => {
  const { data } = props;
  return (
    <div className="d-flex flex-wrap mt-4 align-items-center justify-content-center my-card">
      {data.map((card, index) => <Card {...card} key={index} homePath={'/'}/>)}
    </div>
  )
}

CardList.propTypes = {
  data: PropTypes.array
}

export default CardList