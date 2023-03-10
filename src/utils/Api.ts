export class Api {
  host = process.env.REACT_APP_API || 'http://localhost:5000';

  private _fetch(url: string, method: 'POST' | 'GET' | 'PATCH', body?: any) {
    return fetch(this.host + url, {
      method,
      credentials: 'include',
      body: JSON.stringify(body),
      headers: { ['content-type']: 'application/json' },
    });
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
