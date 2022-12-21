import { Api } from '../utils/Api';

export function createTask(data: {
  email: string;
  userName: string;
  text: string;
}) {
  return new Api().post('/task/', data);
}
