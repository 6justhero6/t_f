import { Api } from '../utils/Api';

export function getTasks(data: { count: number; page: number; sort?: string }) {
  return new Api().get(`/task/${data.page}/${data.count}/${data.sort || ''}`);
}
