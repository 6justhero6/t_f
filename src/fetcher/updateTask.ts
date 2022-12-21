import {Api} from '../utils/Api';

export function updateTask(id: number, data: { text?: string, done?: boolean }) {
  return new Api().patch('/task/' + id, data);
}
