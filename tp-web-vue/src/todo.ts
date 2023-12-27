// Todo.ts
export default class Todo {
  title: string;
  state: string;
  dueDate?: Date; // Nouvelle propriété pour la date d'échéance

  constructor(title: string, state: string, dueDate?: Date) {
    this.title = title;
    this.state = state;
    this.dueDate = dueDate;
  }
}
