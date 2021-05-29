import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import FavoriteCharacters from './components/FavoriteCharacters/FavoriteCharacters';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          {/* <Route path='/main' component={MainPage} /> */}
          <Route exact path='/' component={MainPage} />
          <Route exact path='/favorites' component={FavoriteCharacters} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;