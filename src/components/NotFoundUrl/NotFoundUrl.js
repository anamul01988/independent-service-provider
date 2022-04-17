import React from "react";
import img from "../../asset/noUrl.webp";
const NotFoundUrl = () => {
  return (
    <div className="container">
      <div className="text-center text-secondary my-5">
        <h3 className="text-Secondary">No found url .</h3>
        <img className="w-50 h-auto" src={img} alt="" />
      </div>
    </div>
  );
};

export default NotFoundUrl;
