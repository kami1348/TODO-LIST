import {createElement} from '../framework/render.js';


function createTaskListComponent() {
    return (
      `<div class="taskboard__column">
      <h2>Задачи</h2>
    </div>`
      );
}


export default class TaskListComponent {
  

  getTemplate() {
   
    return createTaskListComponent();
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