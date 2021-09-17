import React from "react";
import propTypes from "prop-types";
import "./TextComponent1.css";
export const TextModule1 = (props) => {
  const { heading, description, headingtextColor,paratextColor, bgColor,HeadingfontSize, ParafontSize,textAlign,padding} = props;
  const styles = {
    bg: {
      backgroundColor: bgColor ? bgColor : "#f8f8f8",
    },
  }

  return (
    <>
      <section id="weaveroo-text-module-1" className={``} style={styles.bg}>
        <div className={`weaverz-ai-w-full weaverz-ai-overflow-hidden`} style={{padding:`${padding}px`}}>
          <h1 style={{fontSize:HeadingfontSize,color:headingtextColor,textAlign:textAlign}} className="head">
            {heading}
          </h1>
          <p style={{fontSize:ParafontSize,color:paratextColor,textAlign:textAlign}} className="des">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};

TextModule1.propTypes = {
  description: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  headingtextColor: propTypes.string,
  paratextColor:propTypes.string,
  bgColor: propTypes.string,
  HeadingfontSize: propTypes.number,
  ParafontSize: propTypes.number,
  textAlign: propTypes.string,
  padding: propTypes.number
};

TextModule1.defaultProps = {
  padding: 18,
  headingtextColor: "#393939",
  paratextColor : "#393939",
  textAlign: "center",
  bgColor: "#f8f8f8",
  HeadingfontSize: 22,
  ParafontSize: 16,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
};
