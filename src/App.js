import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Route,Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import HomePage from './components/pages/homepage';
import MoviesPage from './components/pages/movies';
import Footer from './components/pages/footer';
import Header from './components/pages/header'




class App extends Component {
  render() {
		return (
      <>
				
        <Header/>
				<Routes>
					<Route exact path='/' element={<HomePage/>}></Route>
					<Route exact path='/movies' element={<MoviesPage/>}></Route>
					{/* <Route exact path='/movies/new' component={NewMoviePage}></Route>
					<Route exact path='/movie/:_id' component={NewMoviePage}></Route> */}
        </Routes>

        <Footer/>

				
      </>
    );
  }
}

export default App;