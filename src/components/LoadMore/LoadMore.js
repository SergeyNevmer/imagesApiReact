import React from "react";
import FetchImages from "../../api/imagesApi";
import PropTypes from "prop-types";

export default class LoadMore extends React.Component {
  constructor(prop) {
    super(prop);

    this.handleClickLoadMore = this.handleClickLoadMore.bind(this);

    this.state = {
      page: 2,
    };
  }

  async handleClickLoadMore() {
    const { page } = this.state;
    this.setState((prevState) => ({
      page: (prevState.page += 1),
    }));

    await FetchImages(this.props.value, page).then((images) => {
      this.props.onClick(images);
    });
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleClickLoadMore}>
          Load More
        </button>
      </>
    );
  }
}

LoadMore.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
