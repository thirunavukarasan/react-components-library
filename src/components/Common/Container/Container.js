import React from "react";
import propTypes from "prop-types";
import "./Container.css";
import styles  from "./Container.module.css";

export const Container = (props) => {
  const { retailer } = props;

  return (
    <>
      <div className={`weaveroo-ai-container ${styles[retailer]}`}>{props.children}</div>
    </>
  );
}

Container.propTypes = {
  retailer:propTypes.string
};

Container.defaultProps = {
  retailer : "tjori01"
}