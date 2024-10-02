import { createElement } from '../framework/render.js';


function createTaskComponentTemplate(task) {
  return (
    `<div class="task">
      <span class="task-title">${task.title}</span> 
    </div>`
  );
}

export default class TaskComponent {
  constructor({ task }) {
    this.task = task;
    this.element = null;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.task);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}