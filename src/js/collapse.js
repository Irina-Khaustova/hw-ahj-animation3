export default class Collapse {
  constructor(container) {
    this.container = container;
    this.buttonCollapse = this.container.querySelector('.collapse-button');
    this.collapse = this.container.querySelector('.collapse');
  }

  moveCollapse() {
    this.buttonCollapse.addEventListener('click', () => {
      this.collapse.classList.toggle('move');
    });
  }
}
