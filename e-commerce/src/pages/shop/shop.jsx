import React from "react";

import PreviewCollection from "../../components/preview-collection/preview-collection";
import { connect } from "react-redux"
import { selectCollections } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'

const ShopPage = ({ collections }) => {
 
 
    return (
      <div>
        {collections.map(collection => (
          <PreviewCollection
            key={collection.id}
            title={collection.title}
            routeName={collection.routeName}
            items={collection.items}
          />
        ))}
      </div>
    );
  }

  const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  })

export default connect(mapStateToProps)(ShopPage);
