import React from "react";
import propTypes from "prop-types";
import "./Container.css";
function Container(props) {
  return (
    <>
      <div className="weaveroo-ai-container">{props.children}</div>
    </>
  );
}

export default Container;

Container.propTypes = {};
