import React, { Component } from "react";
import "./preview-collection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <div key={item.id}>
              <img alt={item.name} src={item.imageUrl} />
              <h5> {item.name}</h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
