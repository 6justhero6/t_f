import {Form, Input} from 'antd';
import {FC} from 'react';
import {IModalFormRef} from '../../store/ModalForm';

export const AuthForm: FC<IModalFormRef> = ({ form }) => {
  return <Form form={form} title="Auth" layout="vertical" preserve={false}>
    <Form.Item label="Login" rules={[{ required: true }]} name="login">
      <Input />
    </Form.Item>
    <Form.Item label="Password" rules={[{ required: true }]} name="password">
      <Input.Password type="password" />
    </Form.Item>
  </Form>
}