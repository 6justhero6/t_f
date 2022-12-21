import {action, makeObservable, observable} from "mobx";
import {FormInstance} from 'antd';
import {AuthForm} from '../component/AuthForm/AuthForm';
import {CreateTodoForm} from '../component/CreateTodoForm/CreateTodoForm';
import {PatchTodoForm} from '../component/PatchTodoForm/PatchTodoForm';
import {FC} from 'react';

export interface IModalFormRef {
  form: FormInstance;
}

class ModalForm {
  open = false;
  loading = false;
  FormComponent: FC<IModalFormRef> | undefined;
  title = '';
  onSubmit: (values: any) => void = () => {}

  constructor() {
    makeObservable(this, {
      open: observable,
      loading: observable,
      FormComponent: observable,
      title: observable,
      onSubmit: observable,
      setLoading: action,
      openModal: action,
      close: action,
    })
  }

  defaultOpen(onSubmit:(values: any) => void) {
    this.open = true;
    this.loading = false;
    this.onSubmit = onSubmit;
  }

  openModal(modal: 'auth' | 'createTask' | 'patchTask' | 'close', onSubmit:(values: any) => void) {
    switch (modal) {
      case 'auth':
        this.defaultOpen(onSubmit);
        this.FormComponent = AuthForm;
        this.title = 'Auth';
        break;
      case 'createTask':
        this.defaultOpen(onSubmit);
        this.FormComponent = CreateTodoForm;
        this.title = 'Create task';
        break;
      case 'patchTask':
        this.defaultOpen(onSubmit);
        this.FormComponent = PatchTodoForm;
        this.title = 'Patch task';
        break;
      default:
        throw new Error('Modal type not implemented');
    }
  }

  close() {
    this.open = false;
  }

  setLoading(loading = true) {
    this.loading = loading;
  }

}

export {
  ModalForm
}
