import React from "react";
import PropTypes from "prop-types";

function LightBlogA(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container w-40 h-52 px-2 py-2  mx-auto block overflow-auto">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Block id={item} key={item}></Block>
        ))}
      </div>
    </section>
  );
}

const Block = (props) => (
  <div className=" border-2 border-indigo-500 w-36 h-16 ">{props.id}</div>
);

LightBlogA.defaultProps = {
  theme: "indigo",
};

LightBlogA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightBlogA;
