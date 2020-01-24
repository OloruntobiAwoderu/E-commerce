import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selector'
import './collections-overview.scss'
import PreviewCollection from '../preview-collection/preview-collection'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(collection => (
          <PreviewCollection
            key={collection.id}
            title={collection.title}
            routeName={collection.routeName}
            items={collection.items}
          />
        ))}
      </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  })
export default connect(mapStateToProps)(CollectionsOverview)