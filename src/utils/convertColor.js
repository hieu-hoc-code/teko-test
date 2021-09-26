const convertColor = (colors, idColor) => {
  let colorName = colors.find(({ id }) => id === idColor)
  if (colorName !== undefined) {
    return colorName.name
  } else {
    return 'not found'
  }
}

export default convertColor
