import React, { useState } from 'react'
import {
  handleItemValue
} from 'redux/actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import convertColor from 'utils/convertColor'
import Modal from 'components/modal/Modal'

import './product.scss'

const Product = () => {
  const { items, colors } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  // state
  const [isModal, setIsModal] = useState(true)
  const [changedItem, setChangedItem] = useState([])
  const [productsChange, setProductsChange] = useState([])

  // function handle
  const submitHandle = () => {
    let products = []
    changedItem.forEach(index => {
      products.push(items[index])
    })
    setProductsChange([...products])
    setIsModal(!isModal)
  }

  const changeSelectHandle = (index) => {
    let isIndex = changedItem.find(position => position === index)
    if (isIndex === undefined) {
      setChangedItem([...changedItem, index])
    }
  }

  // dispatch action
  const setItemValue = (item, key, val, index) => {
    item[`${key}`] = val
    changeSelectHandle(index)
    dispatch(handleItemValue({ item: item, index: index }))
  }

  return (
    <div className="update">
      <div className="submit">
        <button type="submit" onClick={submitHandle}>
          Submit
        </button>
      </div>
      {/* modal */}
      {isModal ? <Modal productsChange={productsChange} onListenChild={submitHandle} /> : <div></div>}
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
                    onChange={(e) => setItemValue(item, 'name', e.target.value, index) }
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={item.sku}
                    onChange={(e) => setItemValue(item, 'sku', e.target.value, index) }
                  ></input>
                </td>
                <td>
                  <select name="color" id="color" onChange={e => setItemValue(item, 'color', e.target.value, index)}>
                    <option value>Default</option>
                    {colors.map((color) => (
                      <option
                        key={color.id}
                        defaultValue={color.name}
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
