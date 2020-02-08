import React, { Component }from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

const Header = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>CREATIVIDEO</Text>
      <View style={styles.right}>
          {props.children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ff0079',
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#00edff',
  },
});

export default Header;
