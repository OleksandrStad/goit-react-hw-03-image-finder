import React, { Component } from "react";
import { getImages } from '../services/getImages'
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery'


export class App extends Component {
  state = {
    images: [],
    nameSearch: '',
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.nameSearch !== this.state.nameSearch) {
      getImages(this.state.nameSearch)
        .then(res => res.json())
        .then((images) => this.setState({ images: images.hits }))
    }
  };

  handleChangeSubmit = nameSearch => {
    // console.log(nameSearch)
    this.setState({ nameSearch });
  };




  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleChangeSubmit} />
        <ImageGallery images={this.state.images} />
      </div >
    );
  };

};
