import axios from 'axios';
import React from 'react';
import MainPage from './MainPage';


class MainPageAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.characters.length === 0) {
            axios.get(`https://swapi.dev/api/people/?search=${this.props.term}&page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    let getUrlCharacter = (i) => {
                        let str = response.data.results[i].url;
                        let re = 'http://swapi.dev/api/people/';
                        let midStr = str.slice(0, -1);
                        let lastStr = midStr.replace(re, 'https://starwars-visualguide.com/assets/img/characters/');
                        let newStr = `${lastStr}.jpg`;
                        return newStr;
                    }
                
                    let newResponse = () => {
                        let newResponse = { ...response }
                        let charactersInPage = newResponse.data.results.length
                        for (let i = 0; i < charactersInPage; i++) {
                            let imgUrl = getUrlCharacter(i);
                            newResponse.data.results[i].imgUrl = imgUrl;
                            newResponse.data.results[i].isFavorite = false;
                        }
                        return newResponse;
                
                    }
                    let modResponse = newResponse();
                    this.props.setCharacters(modResponse.data.results);
                    this.props.setTotalCharactersCount(response.data.count);
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://swapi.dev/api/people/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                let getUrlCharacter = (i) => {
                    let str = response.data.results[i].url;
                    let re = 'http://swapi.dev/api/people/';
                    let midStr = str.slice(0, -1);
                    let lastStr = midStr.replace(re, 'https://starwars-visualguide.com/assets/img/characters/');
                    let newStr = `${lastStr}.jpg`;
                    return newStr;
                }
            
                let newResponse = () => {
                    let newResponse = { ...response }
                    let charactersInPage = newResponse.data.results.length
                    for (let i = 0; i < charactersInPage; i++) {
                        let imgUrl = getUrlCharacter(i);
                        newResponse.data.results[i].imgUrl = imgUrl
                        newResponse.data.results[i].isFavorite = false;
                    }
                    return newResponse;
            
                }
                let modResponse = newResponse();
                this.props.setCharacters(modResponse.data.results, '');
            })
    }

    onFilterChanged = (filter) => {
        this.props.setFilter(filter);
        axios.get(`https://swapi.dev/api/people/?search=${this.props.term}`)
            .then(response => {
                let getUrlCharacter = (i) => {
                    let str = response.data.results[i].url;
                    let re = 'http://swapi.dev/api/people/';
                    let midStr = str.slice(0, -1);
                    let lastStr = midStr.replace(re, 'https://starwars-visualguide.com/assets/img/characters/');
                    let newStr = `${lastStr}.jpg`;
                    return newStr;
                }
            
                let newResponse = () => {
                    let newResponse = { ...response }
                    let charactersInPage = newResponse.data.results.length
                    for (let i = 0; i < charactersInPage; i++) {
                        let imgUrl = getUrlCharacter(i);
                        newResponse.data.results[i].imgUrl = imgUrl
                        newResponse.data.results[i].isFavorite = false;
                    }
                    return newResponse;
                }

                let modResponse = newResponse();
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