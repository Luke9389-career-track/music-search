import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchPage from './hooks/SearchPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import ReleasePage from './hooks/ReleasePage';
import SongPage from './hooks/SongPage';
import LyricPage from './hooks/LyricPage';

export default function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/artist/:id/:artist" component={ReleasePage} />
        <Route path="/songs/:id/:artist/" component={SongPage} />
        <Route path="/lyrics/:artist/:title" component={LyricPage}/>
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </Router>

  );
}
