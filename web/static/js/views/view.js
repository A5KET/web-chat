export class View extends EventTarget {
  render() {
    return this.node
  }

  replaceWith(view) {
    this.node.replaceWith(view.render())
  }
}


/**
 * 
 * @param {*} tagName 
 * @param {*} className 
 * @returns {Element}
 */
export function createElement(tagName, className) {
  const node = document.createElement(tagName)
  if (className) {
    node.className = className
  }

  return node
}