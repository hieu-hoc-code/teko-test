import React from 'react'
import Exit from 'assets/images/cross.png'
import './modal.scss'

const Modal = () => {
 return (
  <div className="popup-data" id="popup-data">
        <div className="re-uploaded">
          <span>Re-uploaded Products</span>
          <img src={Exit} alt="exit"></img>
        </div>
        <div className="content-uploaded">
          <div className="img-sp">
            <img src="" alt="img-sp"></img>
          </div>
          <div className="information">
            <p>Laptop Acer nitro 5</p>
            <p>Id : 1</p>
            <p>
              SKU : <span>123456</span>
            </p>
            <p>
              Color : <span>Black</span>
            </p>
          </div>
        </div>
        <button type="button" id="ok">
          OK
        </button>
      </div>
 )
}

export default Modal
