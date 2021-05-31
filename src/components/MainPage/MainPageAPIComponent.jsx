import axios from 'axios';
import React from 'react';
import MainPage from './MainPage';


class MainPageAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.characters.length === 0) {
            axios.get(`https://swapi.dev/api/people/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setCharacters(response.data.results);
                    this.props.setTotalCharactersCount(response.data.count);
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        // axios.get(`https://swapi.dev/api/people/?page=${this.props.pageNumber}&count=${this.props.pageSize}`)
        axios.get(`https://swapi.dev/api/people/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setCharacters(response.data.results);
            })
    }
    
    render() {
        console.log(this.props.totalCharactersCount)
        return (
            <MainPage
             onPageChanged={ this.onPageChanged }
             getCharacters={this.props.getCharacters}
             characters={this.props.characters}
             currentPage={this.props.currentPage}
             totalCharactersCount={this.props.totalCharactersCount}
             pageSize={this.props.pageSize}
             addToFavorite={this.props.addToFavorite}
             deleteFromFavorite={this.props.deleteFromFavorite}
             />
        )
    }
}

export default MainPageAPIComponent;