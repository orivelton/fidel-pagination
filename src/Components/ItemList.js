import React from 'react';

const ItemList = ({currentItem, handleModal}) => {
  const {
    currency,
    card: { scheme },
    location: { 
      address,
      city,
      countryCode
    }
  } = currentItem;
  
  return (
    <li className="tags has-addons panel-block item-list" onClick={() => handleModal(currentItem)}>
        <span className="tag is-primary is-large is-light">{currency}</span>
        <span className={scheme === 'visa' ? 'tag is-danger is-large is-light' : 'tag is-link is-large is-light'}>{scheme}</span>
        <span className={'tag is-light is-large'}><address>Address: {`${address}, ${city} - ${countryCode}`}</address></span>
    </li>
  )
};

export default ItemList;
