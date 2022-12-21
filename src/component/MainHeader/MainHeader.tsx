import {observer} from 'mobx-react-lite';
import {loginFetch} from '../../fetcher/loginFetch';
import {Button, Col, Row} from 'antd';
import {Header} from 'antd/es/layout/layout';
import {store} from '../../store';
import {formHandler} from '../../utils/formHandler';
import {logoutFetch} from '../../fetcher/logoutFetch';
import {MessageInstance} from 'antd/es/message/interface';

export const MainHeader = observer<{ store: typeof store, messageApi: MessageInstance}>(({ store, messageApi }) => {

  const loginHandler = async (values: { login: string, password: string }) => {
    const loginRes = await loginFetch(values).catch(ex => ex);
    switch (loginRes.status) {
      case 200:
        store.user.setAdmin(true);
        break;
      case 403:
        messageApi.open({
          type: 'error',
          content: 'Wrong credentials',
        });
        break;
      default:
        messageApi.open({
          type: 'error',
          content: 'Error occurred',
        });
        break;
    }
    return loginRes.ok;
  }

  const logoutHandler = async () => {
    const loginRes = await logoutFetch().catch(ex => ex);
    switch (loginRes.status) {
      case 200:
        store.user.setAdmin(false);
        break;
      default:
        messageApi.open({
          type: 'error',
          content: 'Error occurred',
        });
        break;
    }
    return loginRes.ok;
  }

  const headerButton = store.user.isAdmin ?
    <Button onClick={logoutHandler}>Logout</Button> :
    <Button onClick={() => store.modalForm.openModal('auth', formHandler(loginHandler, store.modalForm))}>
      Admin log in
    </Button>

  return <Header>
    <Row>
      <Col span={20}/>
      <Col span={4}>
        {headerButton}
      </Col>
    </Row>
  </Header>
})