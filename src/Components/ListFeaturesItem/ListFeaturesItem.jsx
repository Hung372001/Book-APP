import React from "react";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import data from "../../data/Featured";
const ListFeaturesItem = () => {
  console.log(data);
  return (
    <div className="w-full flex flex-wrap">
      {data.map((item, key) => (
        <FeaturesItem key={key} item={item} />
      ))}
    </div>
  );
};

export default ListFeaturesItem;
