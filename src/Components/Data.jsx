// ExampleComponent.js
import React from "react";
import DataFetcher from "./DataFetcher";
import Items from "./Items";

const Data = () => {
  return (
    <DataFetcher>
      {(data) => (
        <div>
          {data.map((item) => (
            <Items item={item} />
          ))}
        </div>
      )}
    </DataFetcher>
  );
};

export default Data;
