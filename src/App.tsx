import {Main} from './screen/Main';

import {store} from './store';
import {message} from 'antd';

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div className="App">
      {contextHolder}
      <Main store={store} messageApi={messageApi} />
    </div>
  );
}

export default App;
