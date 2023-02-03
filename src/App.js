import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import Cakecontainer from './components/cakecontainer';
import HooksCakecontainer from './components/hooksCakecontainer';
import IceCreamContainer from './components/IceCreamContainer';
import Newcakecontainer from './components/newcakecontainer';
import ItemContiner from './components/itemContiner';
import UserFetchData from './components/userFetch' 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserFetchData />
{ /*     <ItemContiner cake />
      <ItemContiner />   
      <Cakecontainer />
        <HooksCakecontainer />
        <IceCreamContainer /> 
  <Newcakecontainer /> */}
      </div>
    </Provider>
  );
}

export default App;
