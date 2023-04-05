import React, { Component } from "react";
import { getImages } from '../services/getImages';
import { InfinitySpin } from 'react-loader-spinner';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button'


export class App extends Component {
  state = {
    images: [],
    nameSearch: '',
    isLoading: false,
    page: 1,
  }

  componentDidUpdate(_, prevState) {
    console.log(this.state.images)

    if (prevState.nameSearch !== this.state.nameSearch) {

      this.setState({ isLoading: true });

      getImages(this.state.nameSearch, this.state.page)
        .then(res => res.json())
        .then((images) => this.setState({ images: images.hits }))
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({ isLoading: false })
        });

    }



    if (prevState.page < this.state.page) {
      getImages(this.state.nameSearch, this.state.page)
        .then(res => res.json())
        .then((images) => this.setState({ images: [...prevState.images, ...images.hits] }))
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({ isLoading: false })
        });
    }

  };




  onLoadMore = () => {
    this.setState((prev) => {
      return {
        page: prev.page + 1,
      };
    });
  }





  handleChangeSubmit = nameSearch => {
    // console.log(nameSearch)
    this.setState({
      nameSearch: nameSearch,
      page: 1
    });

  }



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

        < ImageGallery images={images} />

        {images.length !== 0 &&
          (<BtnLoadMore handlerClick={this.onLoadMore} />)
        }



      </>
    );
  };

};
