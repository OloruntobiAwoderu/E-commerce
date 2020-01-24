import React from "react";
import { connect } from "react-redux"
import { selectCollection } from "../../redux/shop/shop.selector"
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.scss";

const Collection = ({ collection }) => {
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
