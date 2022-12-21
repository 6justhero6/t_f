import {Api} from '../utils/Api';

export function logoutFetch() {
  return new Api().post('/user/logout');
}
