import React, { Component } from 'react'

import './update.scss'

import Exit from 'components/images/cross.png'

function openForm() {
  document.getElementById('popup-data').style.display = 'block'
  document.getElementById('tb-product').style.opacity = '0.5'
}
function closeForm() {
  document.getElementById('popup-data').style.display = 'none'
  document.getElementById('tb-product').style.opacity = '1'
}
class Update extends Component {
  render() {
    return (
      <div className="update">
        <div className="submit">
          <button type="submit" onClick={openForm}>
            Submit
          </button>
        </div>
        <div className="table-product" id="tb-product">
          <table>
            <tr className="title-pro">
              <td>ID</td>
              <td>Error Description</td>
              <td>Product Image</td>
              <td>Product Name</td>
              <td>SKU</td>
              <td>Color</td>
            </tr>
            <tr>
              <td>
                <span>01</span>
              </td>
              <td>
                <span>Product eror 101</span>
              </td>
              <td>
                <img src="" alt="img product"></img>
              </td>
              <td>
                <input type="text" maxLength="30"></input>
              </td>
              <td>
                <input type="text"></input>
              </td>
              <td>
                <select name="color" id="color">
                  <option value="black">Black</option>
                  <option value="White">White</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div className="popup-data" id="popup-data">
          <div className="re-uploaded">
            <span>Re-uploaded Products</span>
            <img src={Exit} alt="exit" onClick={closeForm}></img>
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
          <button type="button" id="ok" onClick={closeForm}>OK</button>
        </div>
      </div>
    )
  }
}

export default Update
