import { Form, Input } from 'antd';
import { FC } from 'react';
import { IModalFormRef } from '../../store/ModalForm';

export const CreateTodoForm: FC<IModalFormRef> = ({ form }) => {
  return (
    <Form form={form} title="Auth" layout="vertical" preserve={false}>
      <Form.Item
        label="Email"
        rules={[{ required: true, type: 'email' }]}
        name="email"
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item label="User name" rules={[{ required: true }]} name="userName">
        <Input />
      </Form.Item>
      <Form.Item label="Text" rules={[{ required: true }]} name="text">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};
