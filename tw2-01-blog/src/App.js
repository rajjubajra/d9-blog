import {Provider} from 'react-redux';
import {store} from './Redux/store';
import Router from './Router';
import MenuBar from './componensts/MainMenu/MenuBar';
import {BrowserRouter, Link} from 'react-router-dom';
import {useState} from 'react';


function App() {

  const [state, setState] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="bg-gray-100 min-h-full w-full">
        <MenuBar />
        <div className={`w-full min-h-screen flex justify-center items-center 
            ${state ? '' : 'hidden'}`}
            onClick={()=>setState(false)}
          >
          <Link  to="/">Live Preview</Link>
        </div>
        <Router />
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
