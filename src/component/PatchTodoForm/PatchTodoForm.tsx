import {Form, Input} from 'antd';
import {FC} from 'react';
import {IModalFormRef} from '../../store/ModalForm';

export const PatchTodoForm: FC<IModalFormRef> = ({ form }) => {
  return <Form form={form} layout="vertical" preserve={false}>
    <Form.Item label="Text" rules={[{ required: true }]}  name="text">
      <Input.TextArea />
    </Form.Item>
  </Form>
}