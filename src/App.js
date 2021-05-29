import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import FavoriteCharacters from './components/FavoriteCharacters/FavoriteCharacters';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <Route exact path='/'
            render={() => <MainPage characters={props.appState.characters} />} />

          <Route exact path='/favorites'
            render={() => <FavoriteCharacters favoriteCharacters={props.appState.favoriteCharacters}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;