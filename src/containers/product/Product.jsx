import React, { useEffect, useState } from 'react'
import {
  fetchProducts,
  fetchColors,
  handleItemValue,
} from 'redux/actions/productAction'
import { useSelector, useDispatch, connect } from 'react-redux'
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

  const setItemValue = (item, key, val, index) => {
    item[`${key}`] = val
    dispatch(handleItemValue({item: item, index: index}))
  }
  return (
    <div className="update">
      <div className="submit">
        <button type="submit" onClick={submitHandle}>
          Submit
        </button>
      </div>
      {/* modal */}
      {isModal ? <Modal /> : <div></div>}
      <div className="table-product" id="tb-product">
        <table>
          <thead>
            <tr className="title-pro">
              <td>ID</td>
              <td>Error Description</td>
              <td>Product Image</td>
              <td>Product Name</td>
              <td>SKU</td>
              <td>Color</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
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
                  <input
                    type="text"
                    maxLength="30"
                    defaultValue={item.name}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={item.sku}
                    // onChange={(e) => setItemValue(item, 'sku', e.target.value, index) }
                  ></input>
                </td>
                <td>
                  <select name="color" id="color">
                    <option value>Default</option>
                    {colors.map((color) => (
                      <option
                        key={color.id}
                        value={color.name}
                        selected={
                          convertColor(colors, item.color) === color.name
                        }
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
      
    </div>
  )
}

export default Product
