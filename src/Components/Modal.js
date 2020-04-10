import React from 'react';

const Modal = ({ openModal, handleModal, currentItem }) => {
  const {card: { scheme, lastNumbers }} = currentItem;
  const { location: { address, city, countryCode } } = currentItem;
  const { identifiers: { MID }} = currentItem;
  return (
    <div className={openModal ? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={handleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Scheme: {scheme}</p>
          <button className="delete" aria-label="close" onClick={handleModal}></button>
        </header>
        <section className="modal-card-body">
          <address>Address: {`${address}, ${city} - ${countryCode}`}</address>
          <p>Last Numbers: {lastNumbers}</p>
          <p>MID: {MID}</p>
        </section>
      </div>
    </div>
  )
} ;

export default Modal;
