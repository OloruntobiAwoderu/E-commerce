import React from "react";
import { Route } from 'react-router-dom'
import collectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from '../collection/collection'

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={collectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    
    </div>
  );
};

export default ShopPage;
