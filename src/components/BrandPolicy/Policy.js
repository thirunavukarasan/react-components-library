import React from "react";
import "./Policy.css";
import propTypes from "prop-types";

export const ShowMore = (props) => {
  const { brandName } = props

  return (
    <div id="weaveroo-brand-policy">
      <div className="weaverz-ai-p-2">
        <input type="checkbox" className="read-more-state" id="post-1" />
        <span className="read-more-wrap">
          <p>
            {`In keeping with ${brandName} policy of constant innovation and improvement, the product and service displayed may vary from the actual product and are not meant to be exact representation of the same.`}
          </p>
          <span className="read-more-target">
            <p>{`All product descriptions are approximate. Product availability, Specifications, and features are subject to change without notice.`}</p>
            <p>{`Some product features may require additional peripheral devices which are sold separately.`}</p>
            <p>{`Some advertised features, applications and services may not be available on all devices and regions and are subject to change without notice.`}</p>
          </span>
        </span>
        <label htmlFor="post-1" id="post-1" className="read-more-trigger">
          <input id="post-1" style={{ display: "none" }} />
          <i className="fa fa-info-circle"></i>
        </label>
      </div>
    </div>
  )
}

ShowMore.propTypes = {
  brandName : propTypes.string
}

ShowMore.defaultProps = {
  brandName : ""
}