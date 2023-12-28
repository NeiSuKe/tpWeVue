export default class Todo {
  title: string;
  state: string;
  dueDate?: Date; 

  constructor(title: string, state: string, dueDate?: Date) {
    this.title = title;
    this.state = state;
    this.dueDate = dueDate;
  }
}
