import { action, makeObservable, observable } from 'mobx';

export class User {
  constructor(public isAdmin: boolean = false) {
    makeObservable(this, {
      isAdmin: observable,
      setAdmin: action,
    });
  }

  setAdmin(isAdmin: boolean) {
    localStorage.setItem('isAdmin', isAdmin.toString());
    this.isAdmin = isAdmin;
  }
}
