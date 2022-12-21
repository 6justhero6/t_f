

export class Api {
  host = process.env.API || 'http://localhost:5000';

  private _fetch(url: string, method: 'POST' | 'GET' | 'PATCH', body?: any) {
    console.log(body);
    return fetch(this.host + url, { method, credentials: 'include', body: JSON.stringify(body), headers: { ['content-type']: 'application/json' } });
  }

  get(url: string) {
    return this._fetch(url, 'GET');
  }

  post(url: string, body?: any) {
    return this._fetch(url, 'POST', body);
  }

  patch(url: string, body?: any) {
    return this._fetch(url, 'PATCH', body);
  }

}