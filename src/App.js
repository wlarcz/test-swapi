import './App.css';
import FavoriteCharacters from './components/FavoriteCharacters/FavoriteCharacters';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <MainPage />
        <FavoriteCharacters />
      </div>
    </div>
  );
}

export default App;