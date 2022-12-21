import { Button, List } from 'antd';
import { observer } from 'mobx-react-lite';
import { Todo as TodoStore } from '../../store/Todo';
import { CheckOutlined, FormOutlined } from '@ant-design/icons';
import { formHandler } from '../../utils/formHandler';
import { updateTask } from '../../fetcher/updateTask';
import { ModalForm } from '../../store/ModalForm';
import { User } from '../../store/User';
import { MessageInstance } from 'antd/es/message/interface';

interface ITodo {
  item: TodoStore;
  modalForm: ModalForm;
  user: User;
  messageApi: MessageInstance;
}

export const Todo = observer<ITodo>(({ item, modalForm, user, messageApi }) => {
  const getActions = (task: TodoStore, admin: boolean) => {
    if (!admin) {
      return [];
    }

    const editTaskFormHandler = formHandler(async (values) => {
      const patchRes = await updateTask(task.id, values);
      if (patchRes.ok) {
        task.edit(values.text);
      }
      if (patchRes.status === 401) {
        messageApi.open({
          type: 'error',
          content: 'Auth required',
        });
      }
      return patchRes.ok;
    }, modalForm);

    const markDone = async () => {
      const patchRes = await updateTask(task.id, { done: true });
      if (patchRes.ok) {
        return (task.done = true);
      }
      if (patchRes.status === 401) {
        messageApi.open({
          type: 'error',
          content: 'Auth required',
        });
      }
    };

    return [
      <Button key="list-done" onClick={markDone}>
        Make done
      </Button>,
      <Button
        key="list-edit"
        onClick={() => modalForm.openModal('patchTask', editTaskFormHandler)}
      >
        Edit text
      </Button>,
    ];
  };

  return (
    <List.Item actions={getActions(item, user.isAdmin)}>
      <List.Item.Meta
        title={
          <p>
            {item.email} {item.userName} {item.done && <CheckOutlined />}{' '}
            {item.edited && <FormOutlined />}
          </p>
        }
        description={item.text}
      />
    </List.Item>
  );
});
