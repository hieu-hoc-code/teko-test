const changeItemValue = (items, val) => {
  items[val.index] = val.item
  return items
}

export default changeItemValue
