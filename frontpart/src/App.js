import Dashboard from "./conmponents/dashboard/Dashboard";
import { Provider } from 'react-redux';
import store from './conmponents/store/store';

function App() {
  return (
    <Provider store={store}>
      <Dashboard/>
    </Provider>
  );
}

export default App;
