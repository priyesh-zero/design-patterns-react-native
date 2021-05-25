import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

export const DrawerContainer: FC<DrawerContentComponentProps> = props => {
  return (
    <View style={[styles.drawerContainer]}>
      <View style={[styles.drawerTop]}>
        <Icon name="animation" style={[styles.icon]} />
        <Text style={[styles.titleText]}>Design Patterns</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text style={[styles.footerText]}>&copy; Priyesh Shrivastava</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 42,
    color: '#ADADAD',
    marginTop: 40,
  },
  titleText: {
    fontSize: 28,
    color: '#ADADAD',
    marginBottom: 20,
  },
  footerText: {
    textAlign: 'center',
    padding: 10,
    color: '#00FF88',
  },
});
