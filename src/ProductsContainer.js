import React from 'react';
import { useSelector } from 'react-redux';
import { selectHomeAndKitchen, selectSportsAndOutdoors } from './redux/selectors';

const ProductsContainer = () => {
  const homeAndKitchen = useSelector(selectHomeAndKitchen);
  const sportsAndOutdoors = useSelector(selectSportsAndOutdoors);

  return (
    <div>
        <pre>{ JSON.stringify(homeAndKitchen, null, 2) }</pre>
        <pre>{ JSON.stringify(sportsAndOutdoors, null, 2) }</pre>
    </div>
  );
};

export default ProductsContainer;
