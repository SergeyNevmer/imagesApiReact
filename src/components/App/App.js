import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageList from "../ImageList/ImageList";
import LoadMore from "../LoadMore/LoadMore";

export default class App extends React.Component {
  constructor(prop) {
    super(prop);

    this.handleChange = this.handleChange.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onGetNewImages = this.onGetNewImages.bind(this);

    this.state = {
      images: [],
      valueFromInput: "",
      error: "",
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ valueFromInput: value });
  }

  onLoadMore(arr) {
    this.setState((prevState) => ({
      images: [...prevState.images, ...arr],
    }));
  }

  onGetNewImages(newImages) {
    this.setState({
      images: [],
    });
    this.setState((prevState) => ({
      images: [...prevState.images, ...newImages],
    }));
  }

  render() {
    const { valueFromInput, images } = this.state;
    return (
      <>
        <SearchBar
          value={valueFromInput}
          onChange={this.handleChange}
          onSubmit={this.onGetNewImages}
        />
        <ImageList array={images} />
        {images.length > 0 && (
          <LoadMore value={valueFromInput} onClick={this.onLoadMore} />
        )}
      </>
    );
  }
}
