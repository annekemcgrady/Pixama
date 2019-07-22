import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import favoritesReducer from "./favoritesReducer/favoritesReducer";
import popularMoviesReducer from './popularMoviesReducer/popularMoviesReducer';
import romanceMoviesReducer from './romanceMoviesReducer/romanceMoviesReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  popularMovies: popularMoviesReducer,
  romanceMovies: romanceMoviesReducer,
  favorites: favoritesReducer,
});

export default rootReducer; 