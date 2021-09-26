import React, { useEffect } from 'react'
import { fetchProducts, fetchColors } from 'redux/actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import convertColor from 'utils/convertColor'

import './home.scss'

const Home = () => {
  const { items, colors } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchProducts()), [])
  useEffect(() => dispatch(fetchColors()), [])
  return (
    <div className="products">
      <div className="content-pro">
        <div className="product-container">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <div className="img-product">
                <img src={item.image} alt="logo" />
              </div>
              <span>{item.errorDescription}</span>
              <h3>{item.name}</h3>
              <span>ID : {item.id}</span>
              <span>SKU : {item.sku}</span>
              <span>Color : {convertColor(colors, item.color)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="end">End !</div>
    </div>
  )
}

export default Home
