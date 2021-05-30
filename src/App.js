import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import FavoriteCharacters from './components/FavoriteCharacters/FavoriteCharacters';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <Route exact path='/'
            render={() => <MainPage characters={props.state.favoriteCharacters.characters} dispatch={props.dispatch}
            />} />

          <Route exact path='/favorites'
            render={() => <FavoriteCharacters
              dispatch={props.dispatch}
              favoriteCharacters={props.state.favoriteCharacters} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;