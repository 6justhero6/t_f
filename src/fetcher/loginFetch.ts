import {Api} from '../utils/Api';

export function loginFetch({ login, password }: { login: string, password: string }) {
  return new Api().post('/user/login', { login, password });
}
