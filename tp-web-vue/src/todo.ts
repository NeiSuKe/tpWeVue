export default class Todo {
  title: string;
  state: string;
  dueDate?: Date;
  desc?: string;
  sublist?: string[];

  constructor(title: string, state: string, dueDate?: Date, desc?: string, sublist?: string[]) {
    this.title = title;
    this.state = state;
    this.dueDate = dueDate;
    this.desc = desc;
    this.sublist = sublist;
  }
}
