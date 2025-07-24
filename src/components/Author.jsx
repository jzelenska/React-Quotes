import React from "react";

function Author({author}) {
    console.log("Author component rendered with author:", author);
  return (
    <div className="Author">
      <h3>{author}</h3>
    </div>
  );
}

export default Author;