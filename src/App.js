import React from 'react';
import { Provider } from 'react-redux';
import Store from './redux/store';
import ProductsContainer from './ProductsContainer';

function App() {
  return (
    <Provider store={ Store }>
      <ProductsContainer />
    </Provider>
  );
}

export default App;
