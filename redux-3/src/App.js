import { Provider } from 'react-redux';
import './App.css';
import CakePage from './pages/CakePage';
import store from './redux/Store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakePage/>
      </div>
    </Provider>
  );
}

export default App;
