import React, { useEffect } from 'react'
import { fetchProducts, fetchColors } from 'redux/actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import convertColor from 'utils/convertColor'
import { NavLink } from 'react-router-dom'

import './home.scss'

const Home = () => {
  const { items, colors } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchProducts()), [])
  useEffect(() => dispatch(fetchColors()), [])
  
  return (
    <div className="products">
      <div className="edit-pro">
        <NavLink activeClassName="show" to="/update">
          Update Products
        </NavLink>
      </div>
      <div className="content-pro">
        <div className="product-container">
          {items.map((item) => (
            <div key={item.id} className="pro">
              <div className="img-product">
                <img src={item.image} alt="pro" />
              </div>
              <div className="item">
                <h3>{item.name}</h3>
                <span>ID : {item.id}</span>
                <span>SKU : {item.sku}</span>
                <span>Color : {convertColor(colors, item.color)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="end">End !</div>
    </div>
  )
}

export default Home
