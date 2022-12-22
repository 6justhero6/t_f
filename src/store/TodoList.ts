import { Todo } from './Todo';
import { action, makeObservable, observable } from 'mobx';
import { getTasks } from '../fetcher/getTasks';

export type Sort =
  | 'email_asc'
  | 'text_asc'
  | 'userName_asc'
  | 'id_asc'
  | 'email_desc'
  | 'text_desc'
  | 'userName_desc'
  | 'id_desc'
  | 'done_asc'
  | 'done_desc';

class TodoList {
  constructor(
    public list: Todo[] = [],
    public page = 0,
    public count = 10,
    public sort: Sort = 'id_asc',
    public countOnPage = 5
  ) {
    makeObservable(this, {
      list: observable,
      push: action,
      page: observable,
      sort: observable,
      count: observable,
      setSort: action,
      setPage: action,
      updateList: action,
    });
  }

  push(todo: { id: number; email: string; userName: string; text: string }) {
    this.count += 1;
    if (this.list.length + 1 > this.countOnPage) {
      return;
    }
    this.list.push(
      new Todo(todo.id, todo.userName, todo.email, todo.text, false, false)
    );
  }

  setPage(page: number) {
    this.page = page;
    this.updateList();
  }

  setSort(sort: typeof this.sort) {
    this.sort = sort;
    this.updateList();
  }

  updateList() {
    getTasks({
      page: this.page,
      count: this.countOnPage,
      sort: this.sort,
    }).then(async (response) => {
      const { tasks, count } = (await response.json()).data;
      this.list =
        tasks.map(
          (task: Todo) =>
            new Todo(
              task.id,
              task.userName,
              task.email,
              task.text,
              task.done,
              task.edited
            )
        ) || [];
      this.count = count;
    });
  }
}

export { TodoList };
