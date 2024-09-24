import {createElement} from '../framework/render.js';


function createTaskComponentTemplate(title) {
    const {title, status}=task;

    return (
      `<div class="task">
      <span class="task-title">${title}</span>
    </div>`
      );
}


export default class TaskComponent {

  constructor({title}){
    this.title=title;
  }
  getTemplate() {
    return createTaskComponentTemplate(this.title);
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