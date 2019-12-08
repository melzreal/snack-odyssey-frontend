import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
//playing around with learning react book example

const Star = ({ selected = false, 
  onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);


const createArr = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setStars] = useState(0);
 
  return (
    <>
      {createArr(totalStars).map((n, i) => (
        <Star key={i} 
        selected={selectedStars > i}
        onSelect={() => setStars( i + 1)} 
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}


