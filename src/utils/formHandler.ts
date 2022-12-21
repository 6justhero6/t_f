import { ModalForm } from '../store/ModalForm';

export const formHandler = (
  handler: (values: any) => Promise<boolean>,
  modalForm: ModalForm
) => {
  return async (values: any) => {
    modalForm.setLoading(true);
    const handlerRes = await handler(values);
    if (handlerRes) {
      modalForm.close();
    } else {
      modalForm.setLoading(false);
    }
  };
};
