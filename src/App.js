import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store'
import EditProductForm from './components/EditProductForm';
import Home from './components/Home';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <Router>
      <Provider store= {store}>
        <PageWrapper>
            <Route
              exact = {true}
              path = '/'
              component = {Home}
            />
            <Route
              path = '/edit'
              component = {EditProductForm}
            />            
        </PageWrapper>
      </Provider>
    </Router>
        
  );
}

export default App;
