// import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator } from '../../redux/character-reducer';
import axios from 'axios';
import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './MainPage.module.css';

class MainPage extends React.Component {

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
            debugger
    }

    addToFavorite = () => {
        this.props.addToFavorite();
    }

    deleteFromFavorite = () => {
        this.props.deleteFromFavorite();
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <h1>Персонажи Звездных Войн</h1>
                <div className={styles.pagination}>
                    {pages.map(p => {
                        return <a className={this.props.currentPage === p && styles.active}
                            onClick={() => { this.onPageChanged(p) }}>{p}</a>
                    })}
                    {/* <a href="#">«</a>
                    
                    <a href="#" className={styles.active}>2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">»</a> */}
                </div>
                <div>
                    <button onClick={() => { this.addToFavorite() }}>ДОБАВИТЬ ПЕРСА</button>
                    <button onClick={() => { this.deleteFromFavorite() }}>УДАЛИТЬ ПЕРСА</button>
                    <button onClick={() => { this.getCharacters() }}>ДОБАВИТЬ</button>
                </div>
                <div className={styles.character_list}>
                    {/* {this.charactersElements} */}
                    {this.props.characters
                        .map(card => <CharacterItem name={card.name} />)}
                </div>
            </div>
        )
    }
}

export default MainPage;