import React from 'react';
import './App.css';
import Provider from "react-redux/es/components/Provider"
import store from "./store/Store/store"
import SearchBar from "./Components/SearchComponent"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import MainComponent from './Components/MainComponent';

 import DataComponent from './Common/DataComponent';

function App() {
  document.bgColor="black"
  return (
    <Provider store={store}>
      <Router>
    <div className="App">    
       <SearchBar />
       <Switch>
       <Route path="/" exact component={DataComponent}/>
         <Route path="/:searchText" exact component={MainComponent}/>
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
