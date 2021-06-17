import axios from 'axios';
import React from 'react';
import MainPage from './MainPage';


class MainPageAPIComponent extends React.Component {

    getUrlCharacter(response, i) {
        let str = response.data.results[i].url;
        let re = 'http://swapi.dev/api/people/';
        let midStr = str.slice(0, -1);
        let lastStr = midStr.replace(re, 'https://starwars-visualguide.com/assets/img/characters/');
        let newStr = `${lastStr}.jpg`;
        return newStr;
    }

    newResponse(response) {
        let newResponse = { ...response }
        let charactersInPage = newResponse.data.results.length
        for (let i = 0; i < charactersInPage; i++) {
            let imgUrl = this.getUrlCharacter(newResponse, i);
            newResponse.data.results[i].imgUrl = imgUrl;
            newResponse.data.results[i].isFavorite = false;
        }
        return newResponse;
    }

    componentDidMount() {
        if (this.props.characters.length === 0) {
            axios.get(`https://swapi.dev/api/people/?search=${this.props.term}&page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    let modResponse = this.newResponse(response);
                    let localStorageFef = localStorage.getItem('favorite character');
                    let localStorageFefOBJ = JSON.parse(localStorageFef);
                    // if (localStorageFefOBJ.length > 0) {
                    if (localStorageFefOBJ) {
                        // this.props = {...this.props,  favoriteCharacters: localStorageFefOBJ};
                        this.props.setFavCharacters(localStorageFefOBJ)
                    }
                    this.props.setCharacters(modResponse.data.results);
                    this.props.setTotalCharactersCount(response.data.count);

                })
        }
    }

    componentDidUpdate(prevProps) {
        let fav  = this.props;
        localStorage.setItem('favorite character', JSON.stringify((fav.favoriteCharacters)));
        let localStorageFef= localStorage.getItem('favorite character');
        let localStorageFefOBJ = JSON.parse(localStorageFef);
        // if (localStorageFefOBJ.length > 0) {
        if (localStorageFefOBJ) {
            // this.props = {...this.props,  favoriteCharacters: localStorageFefOBJ};
            const newState = {...this.props,  favoriteCharacters: localStorageFefOBJ};
            return newState;
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://swapi.dev/api/people/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                let modResponse = this.newResponse(response);
                this.props.setCharacters(modResponse.data.results, '');
            })
    }

    onFilterChanged = (filter) => {
        this.props.setFilter(filter);
        axios.get(`https://swapi.dev/api/people/?search=${this.props.term}`)
            .then(response => {
                let modResponse = this.newResponse(response);
                this.props.setCharacters(modResponse.data.results);
            })
    }

    render() {
        return (
            <MainPage
                onPageChanged={this.onPageChanged}
                getCharacters={this.props.getCharacters}
                characters={this.props.characters}
                currentPage={this.props.currentPage}
                totalCharactersCount={this.props.totalCharactersCount}
                pageSize={this.props.pageSize}
                addToFavorite={this.props.addToFavorite}
                deleteFromFavorite={this.props.deleteFromFavorite}
                onFilterChanged={this.onFilterChanged}
            />
        )
    }
}

export default MainPageAPIComponent;