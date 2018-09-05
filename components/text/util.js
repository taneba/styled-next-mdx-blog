export const getHeadingID = children => {
  let text = children

  // If there are sub components, convert them to text
  if (Array.isArray(children)) {
    text = children
      .map(child => {
        return typeof child === 'object' ? child.props.children : child
      })
      .join('')
  }

  return text
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[?!]/g, '')
}
