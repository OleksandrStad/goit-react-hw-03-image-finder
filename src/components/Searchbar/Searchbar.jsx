import React, { Component } from "react";

import {
    Header,
    SearchForm,
    SearchFormBtn,
    SearchFormInput,
    SearchFormButtonLabel
} from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        nameSearch: '',
    };

    handleChange = (e) => {
        this.setState({ nameSearch: e.target.value.toLowerCase() });

    }

    // handleChange = ({ target: { value } }) => {
    //     this.setState({ value })
    //     // console.log(e.target.value)
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.nameSearch.trim() === '') {
            alert(`введите имя поиска`);
            return;
        }

        this.props.onSubmit(this.state.nameSearch);
        this.setState({ nameSearch: '' });
    }

    render() {

        return (
            <Header >
                <SearchForm
                    onSubmit={this.handleSubmit}

                >
                    <SearchFormBtn type="submit" >
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.nameSearch}
                    />
                </SearchForm>
            </Header >

        )
    }

}