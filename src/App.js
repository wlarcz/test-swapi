import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import FavoriteCharactersContainer from './components/FavoriteCharacters/FavoriteCharactersContainer';
import Header from './components/Header/Header'
import MainPageContainer from './components/MainPage/MainPageContainer';

const App = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <div className="App">
        <Header />
        <div className="content-wrapper">
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