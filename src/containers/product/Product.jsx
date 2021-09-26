import React, { useEffect, useState } from 'react'
import { fetchProducts, fetchColors } from 'redux/actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import convertColor from 'utils/convertColor'
import Modal from 'components/modal/Modal'

import './product.scss'

const Product = () => {
  const { items, colors } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchProducts()), [])
  useEffect(() => dispatch(fetchColors()), [])

  const [isModal, setIsModal] = useState(true)

  const submitHandle = () => {
    setIsModal(!isModal)
  }
  return (
    <div className="update">
      <div className="submit" >
        <button type="submit" onClick={submitHandle}>Submit</button>
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
          <tbody>
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
                  >
                    <option value>Default</option>
                    {colors.map((color) => (
                      <option
                        key={color.id}
                        value={color.name}
                        selected={convertColor(colors, item.color) === color.name}
                      >
                        {color.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal */}
      {isModal ? <Modal /> : <div></div>}
    </div>
  )
}

export default Product
