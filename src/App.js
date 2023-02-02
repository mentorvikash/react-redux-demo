import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';

import Cakecontainer from './components/cakecontainer';
import HooksCakecontainer from './components/hooksCakecontainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cakecontainer />
        <HooksCakecontainer />
        <IceCreamContainer /> 
      </div>
    </Provider>
  );
}

export default App;
