import React, { Component } from 'react'

import Laptop from 'components/images/laptop.png'

import './update.scss'

class Update extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, Error: 'Product error 101', name: 'Laptop1', SKU: '1710135', Color: 'Black' },
        { id: 2, Error: 'Product error 102', name: 'Laptop2', SKU: '1710136', Color: 'Black' },
        { id: 3, Error: 'Product error 103', name: 'Laptop3', SKU: '1710137', Color: 'Black' },
        { id: 4, Error: 'Product error 104', name: 'Laptop4', SKU: '1710138', Color: 'Black' }
      ]
    }
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, Error, name, SKU, Color } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{Error}</td>
          <td><img src={Laptop} alt="img" ></img></td>
          <td>{name}</td>
          <td>{SKU}</td>
          <td><input type="text" value={Color}></input></td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    )
  }
}

export default Update
