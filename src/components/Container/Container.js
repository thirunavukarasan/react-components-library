import React from "react";
import propTypes from "prop-types";
import "./Container.css";
export const Container = (props) => {
  const { retailer } = props;
  let fontFamily;
  // if(retailer === 'tjori-01') {
  //   fontFamily = `${"Times New Roman", "Times", "serif"}`
  // }else {
  //   fontFamily = `${'Open Sans', 'sans-serif'}`
  // }
  // const styles = {
  //   font: {
  //     fontFamily : fontFamily
  //   }
  // }
  return (
    <>
      <div className="weaveroo-ai-container">{props.children}</div>
    </>
  );
}

Container.propTypes = {
  retailer:propTypes.string
};

Container.defaultProps = {
  retailer : ""
}