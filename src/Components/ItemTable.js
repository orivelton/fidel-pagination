import React from 'react';

const ItemTable = ({currency, card, location}) => {
  const { scheme, lastNumbers } = card;
  const {address, city, postcode, countryCode} = location;
  return (
    <tbody>
      <tr>
        <td>{currency}</td>
        <td>{scheme}</td>
        <td>{lastNumbers}</td>
        <td>{`${address} ${city} - ${postcode} - ${countryCode}`}</td>
      </tr>
    </tbody>
  )
};

export default ItemTable;
