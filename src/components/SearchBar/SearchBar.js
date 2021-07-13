import React from "react";
import PropTypes from "prop-types";
import FetchImages from "../../api/imagesApi";

export default class SearchBar extends React.Component {
  constructor(prop) {
    super(prop);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    await FetchImages(this.props.value)
      .then((images) => this.props.onSubmit(images))
      .catch((error) => this.setState({ error }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
