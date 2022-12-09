import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function StarRating() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    localStorage.setItem("rate", setRating(rate));

    // setRating(rate);
    // alert(rate);
    // other logic
  };
  // Optional callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={rating}
        ratingValue={rating}
        /* Available Props */
      />
    </div>
  );
}
