import React, { Component } from 'react'

import './update.scss'

class Update extends Component {
  render() {
    return (
      <div className="update">
        <div className="table-product">
          <div className="submit">
            <button type="button">Submit</button>
          </div>
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
      </div>
    )
  }
}

export default Update
