import { Button, Form, Modal } from 'antd';
import { FC } from 'react';
import { IModalFormRef } from '../../store/ModalForm';

interface ModalFormProps {
  onClose: () => void;
  loading: boolean;
  FormComponent?: FC<IModalFormRef>;
  open: boolean;
  title: string;
  onSubmit: (values: any) => void;
}

export const ModalForm = ({
  FormComponent,
  open,
  title,
  onSubmit,
  loading,
  onClose,
}: ModalFormProps) => {
  const [form] = Form.useForm();

  const okClick = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
    });
  };

  return (
    <Modal
      onCancel={onClose}
      open={open}
      title={title}
      footer={[
        <Button key="ok" loading={loading} onClick={okClick}>
          OK
        </Button>,
      ]}
    >
      {FormComponent && <FormComponent form={form} />}
    </Modal>
  );
};
