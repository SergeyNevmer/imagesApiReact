import React from "react";
import PropTypes from "prop-types";

const ImageListItem = ({ url }) => (
  <li>
    <img src={url} alt="" />
  </li>
);

ImageListItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ImageListItem;
