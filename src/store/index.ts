import {User} from './User';
import {TodoList} from './TodoList';
import {ModalForm} from './ModalForm';

const isAdmin = localStorage.getItem('isAdmin') === 'true';

const user = new User(isAdmin);
const todoList = new TodoList();
const modalForm = new ModalForm();

todoList.updateList();

export const store = {
  user,
  todoList,
  modalForm,
}

