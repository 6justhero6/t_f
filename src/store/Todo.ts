import { makeObservable, observable, action } from "mobx";

class Todo {
  constructor(public id: number, public userName: string, public email: string, public text: string, public done: boolean, public edited: boolean) {
    makeObservable(this, {
      userName: observable,
      email: observable,
      text: observable,
      done: observable,
      edit: action,
    })
  }

  public edit(text: string) {
    this.text = text;
    this.edited = true;
  }

}

export {
  Todo
}
