class VElement {
  constructor(tagName, classList = [], styles = {}, attributes = {}, childElement = {}) {
    /**
     * @type {HTMLElement}
     */
    this.element = document.createElement(tagName);
    this.applyStyles(styles);
    this.applyAttributes(attributes);
    this.element.classList.add(...classList);
    this.child(childElement);
  }

  /**
   * Applies attributes to the element
   * @param {Object} attributes
   */
  applyAttributes(attributes) {
    Object.values(pair => this.element.setAttribute(pair[0], pair[1]));
  }

  /**
   * Applies styles to the element
   * @param {Object} styles
   */
  applyStyles(element, styles) {
    Object.values(pair => this.element.style[pair[0]] = pair[1]);
  }

  /**
   *
   * @param {HTMLElement} element
   */
  child(element) {
    this.element.appendChild(element);
  }
}

export default VElement;