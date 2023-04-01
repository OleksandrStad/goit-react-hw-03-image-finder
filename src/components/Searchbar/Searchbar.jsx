import React, { Component } from "react";

import { Header, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        value: '',
    };

    // handleChange = (e) => {
    //     this.setState({ value: e.target.value })
    //     // console.log(e.target.value)
    // }

    handleChange = ({ target: { value } }) => {
        this.setState({ value })
        // console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {

        // console.log(this.State.value)
        return (
            <Header >
                <SearchForm
                    onSubmit={this.handleSubmit}

                >
                    <SearchFormBtn type="submit" >
                        <span className="button-label">Search</span>
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </SearchForm>
            </Header >

        )
    }

}