import React from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppState } from './AppState';
import { Reducer } from './Reducer';

export const AppContext = React.createContext();


function App() {

  const [data, dispatch] = React.useReducer(Reducer, AppState);

  return (
    <Router>
      <AppContext.Provider value={{data, dispatch}}>
        <Header />
        <Content />
        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
