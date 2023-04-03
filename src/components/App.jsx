import React, { Component } from "react";
import { getImages } from '../services/getImages';
import { InfinitySpin } from 'react-loader-spinner';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    images: [],
    nameSearch: '',
    isLoading: false,
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.nameSearch !== this.state.nameSearch) {

      this.setState({ isLoading: true });

      getImages(this.state.nameSearch)
        .then(res => res.json())
        .then((images) => this.setState({ images: images.hits }))
        .finally(() => {
          this.setState({ isLoading: false })
        });


    }
  };

  handleChangeSubmit = nameSearch => {
    // console.log(nameSearch)
    this.setState({ nameSearch });
  };




  render() {
    const { images, isLoading } = this.state

    return (
      <>


        <Searchbar onSubmit={this.handleChangeSubmit} />


        {isLoading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InfinitySpin width="400" color="#4c2ef7" />
          </div>
        )}
        <ImageGallery images={images} />
      </>
    );
  };

};
