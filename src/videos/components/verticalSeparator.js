import React, { Component }from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

const VerticaSeparator = (props) => {
  return (
    <View style={[
        styles.separator,
        {
          borderTopColor: (props.color) ? props.color : '#eaeaea',
        },
      ]}>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

export default VerticaSeparator;
