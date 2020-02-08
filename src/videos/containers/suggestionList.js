import React, { Component }from 'react';
import {
  Text,
  FlatList
} from 'react-native';

import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../components/verticalSeparator';
import Suggestions from '../components/suggestion';

class SuggestionsList extends Component<Props>{
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias"/>
  itemSeparator = () => <Separator color="lightblue"/>
  renderItem = ({item}) => {
    return(
      <Suggestions {...item}/>
    )
  }
  render() {
    return (
      <Layout
        title="Recomendado para ti"
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          />
      </Layout>
    );
  }
};

export default SuggestionsList;
