import {Provider} from 'react-redux';
import {store} from './Redux/store';
import Router from './Router';
import MenuBar from './componensts/MainMenu/MenuBar';
import {BrowserRouter, Link} from 'react-router-dom';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="bg-gray-100 min-h-full w-full">
        <MenuBar />
        <div>
          <Link to="/">View Page</Link>
        </div>
        <Router />
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
