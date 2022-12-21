import {observer} from "mobx-react-lite";
import {store} from '../store';
import {Button, Col, Layout, List, Pagination, Row, Select} from 'antd';
import {ModalForm} from '../component/ModalForm/ModalForm';
import {createTask} from '../fetcher/createTask';
import {MainHeader} from '../component/MainHeader/MainHeader';
import {formHandler} from '../utils/formHandler';
import {Todo} from '../component/Todo/Todo';
import './Main.module.css';
import {MessageInstance} from 'antd/es/message/interface';

export const Main = observer<{ store: typeof store, messageApi: MessageInstance }>(({ store, messageApi }) => {

  const createTaskHandler = async (values: { email: string, userName: string, text: string }) => {
    const createTaskRes = await createTask(values);
    store.todoList.updateList();
    if (createTaskRes.ok) {
      messageApi.open({
        type: 'success',
        content: 'Added!',
      });
    }
    return createTaskRes.ok;
  }

  const onSortChange = (value: typeof store.todoList.sort) => store.todoList.setSort(value);
  const onPageChange = (value: number) => store.todoList.setPage(value - 1);

  return <Layout>
    <MainHeader store={store} messageApi={messageApi} />

    <Row gutter={[16, 16]}>
      <Col>
        <Button
          style={{ margin: 12 }}
          onClick={() => store.modalForm.openModal('createTask', formHandler(createTaskHandler, store.modalForm))}
        >
          Add task
        </Button>
      </Col>
      <Col>
        <Select
          className="custom-select"
          defaultValue={store.todoList.sort}
          onChange={onSortChange}
          options={[
            {
              value: 'id_asc',
              label: 'Id ↑',
            },
            {
              value: 'id_desc',
              label: 'Id ↓',
            },
            {
              value: 'email_asc',
              label: 'Email ↑',
            },
            {
              value: 'email_desc',
              label: 'Email ↓',
            },
            {
              value: 'userName_asc',
              label: 'User name ↑',
            },
            {
              value: 'userName_desc',
              label: 'User name ↓',
            },
            {
              value: 'done_asc',
              label: 'Status ↑',
            },
            {
              value: 'done_desc',
              label: 'Status ↓',
            },
          ]} />
      </Col>

    </Row>

    <ModalForm
      onClose={() => store.modalForm.close()}
      title={store.modalForm.title}
      onSubmit={store.modalForm.onSubmit}
      FormComponent={store.modalForm.FormComponent}
      loading={store.modalForm.loading}
      open={store.modalForm.open}
    />
    <List
      itemLayout="horizontal"
      dataSource={store.todoList.list}
      renderItem={(item) => <Todo item={item} modalForm={store.modalForm} user={store.user} messageApi={messageApi} />}
    />
    <Row align="middle" justify="center">
      <Col>
        <Pagination onChange={onPageChange} defaultCurrent={store.todoList.page + 1} total={store.todoList.count} pageSize={store.todoList.countOnPage} />
      </Col>
    </Row>
  </Layout>
})
