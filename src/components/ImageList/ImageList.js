import React from "react";
import PropTypes from "prop-types";
import ImageListItem from "../ImageListItem/ImageListItem";

const ImageList = ({ array }) => (
  <ul>
    {array.map((item) => (
      <ImageListItem key={item.id} url={item.previewURL} />
    ))}
  </ul>
);

ImageList.propTypes = {
  array: PropTypes.array.isRequired,
};

export default ImageList;
