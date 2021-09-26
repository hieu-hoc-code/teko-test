import React, { useEffect } from 'react'
import { fetchProducts, fetchColors } from 'redux/actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import convertColor from 'utils/convertColor'
import Modal from 'components/modal/Modal'

import './product.scss'

function openForm() {
  document.getElementById('popup-data').style.display = 'block'
  document.getElementById('tb-product').style.opacity = '0.5'
}
function closeForm() {
  document.getElementById('popup-data').style.display = 'none'
  document.getElementById('tb-product').style.opacity = '1'
}

const Product = () => {
  const { items, colors } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchProducts()), [])
  useEffect(() => dispatch(fetchColors()), [])

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
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <span>{item.id}</span>
              </td>
              <td>
                <span>{item.errorDescription}</span>
              </td>
              <td>
                <img src={item.image} alt="img product"></img>
              </td>
              <td>
                <input type="text" maxLength="30"></input>
              </td>
              <td>
                <input type="text"></input>
              </td>
              <td>
                <select
                  name="color"
                  id="color"
                  selected={convertColor(colors, item.id)}
                >
                  {
                    colors.map(color => (
                      <option key={color.id} selected={convertColor(colors, item.id) === color.name}>{color.name}</option>
                    ))
                  }
                  
                </select>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {/* modal */}
      <Modal />
    </div>
  )
}

export default Product
