import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import FavoriteCharacters from './components/FavoriteCharacters/FavoriteCharacters';
import FavoriteCharactersContainer from './components/FavoriteCharacters/FavoriteCharactersContainer';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';
import MainPageContainer from './components/MainPage/MainPageContainer';

const App = (props) => {
  debugger
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          {/* <Route exact path='/'
              render={() => <MainPageContainer characters={props.state.favoriteCharacters.characters} dispatch={props.dispatch}
            />} /> */}
            {/* <Route exact path='/favorites'
            render={() => <FavoriteCharacters
              dispatch={props.dispatch}
              favoriteCharacters={props.state.favoriteCharacters} />} /> */}
          <Route exact path='/'
              render={() => <MainPageContainer />} />

          <Route exact path='/favorites'
            render={() => <FavoriteCharactersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;