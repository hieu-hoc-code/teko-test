import React, { useEffect } from 'react'
import { fetchPosts } from 'redux/actions/clientActions'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const { items } = useSelector(state => state.client)
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchPosts()), [])
  return (
    <div>
      <h2>Hello world</h2>
      <h3>{items.map(item => (<div key={item.id}>{item.title}</div>))}</h3>
    </div>
  )
}

export default Home