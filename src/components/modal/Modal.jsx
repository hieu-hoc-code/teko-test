import React from 'react'
import Exit from 'assets/images/cross.png'
import './modal.scss'

const Modal = ({ productsChange, onListenChild }) => {
  return (
    <div className="popup-data" id="popup-data">
      <div className="re-uploaded">
        <span>Re-uploaded Products</span>
        <img src={Exit} alt="exit" onClick={() => onListenChild()}></img>
      </div>
      {productsChange.map((item) => (
        <div className="content-uploaded" key={item.id}>
          <div className="img-sp">
            <img src={item.image} alt="image__product"></img>
          </div>
          <div className="information">
            <p>{item.name}</p>
            <p>Id : {item.id}</p>
            <p>
              SKU : <span>{item.sku}</span>
            </p>
            <p>
              Color : <span>{item.color}</span>
            </p>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => onListenChild()}>
        OK
      </button>
    </div>
  )
}

export default Modal
