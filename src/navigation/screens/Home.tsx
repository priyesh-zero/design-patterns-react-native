import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Home = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'#00FF88'}
        barStyle={'light-content'}
        hidden={false}
      />
      <View style={[styles.container]}>
        <Icon name="animation" style={[styles.icon]} />
        <Text style={[styles.text]}>Design Patterns</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00FF88',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 42,
    color: '#ADADAD',
  },
  text: {
    fontSize: 32,
    fontWeight: '900',
    color: '#888',
  },
});
