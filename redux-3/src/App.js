import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './pages/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
      </div>
    </Provider>
      
  );
}

export default App;
