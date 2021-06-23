import React from "react";
import propTypes from "prop-types";
import "./Container.css";
export const Container = (props) => {
  return (
    <>
      <div className="weaveroo-ai-container">{props.children}</div>
    </>
  );
}

Container.propTypes = {};
