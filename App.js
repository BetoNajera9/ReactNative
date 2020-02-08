import React, {Component}from 'react';
import {
  Text,
  View
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/containers/suggestionList';
import CategoryList from './src/videos/containers/categoryList';
import API from './utils/api';

type Props = {};
class App extends Component<Props>{
  state = {
    suggestionsList: [],
    categoryList: []
  }
  async componentDidMount() {
    const movies = await API.getSuggestions(10)
    const categories = await API.getMovies()

    this.setState({
      suggestionsList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Home>
        <Header/>
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionsList
          list={this.state.suggestionsList}
        />
      </Home>
    );
  }
}

export default App;
