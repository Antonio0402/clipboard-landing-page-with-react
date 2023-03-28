import React from "react";

const Feed = ({ title, content }) => {
  return (
    <div className="text-center sm:text-left">
      <h3 className="text-700 font-semibold">{title}</h3>
      <p className="text-400 mx-auto max-w-[35ch] sm:mx-0">{content}</p>
    </div>
  );
};

export default Feed;
