import React from "react";
import propTypes from "prop-types";
import styles  from "./Text.module.css";

export const Text = (props) => {
  const { headingSize, paraSize} = props;

  return (
    <>
      <div className={`${styles[paraSize]}  ${styles[headingSize]}`}>{props.children}</div>
    </>
  );
}

Text.propTypes = {
    paraSize:propTypes.string,
    headingSize:propTypes.string
};

Text.defaultProps = {
  headingSize : "weaverooSH20",
  paraSize : "weaverooSP16"
}

