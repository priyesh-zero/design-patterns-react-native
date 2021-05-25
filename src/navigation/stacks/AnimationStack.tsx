import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AnimationStackRootList} from './types/AnimationStack';
import {Home} from '../screens/Home';
import {DrawerContainer} from './drawer';

const Drawer = createDrawerNavigator<AnimationStackRootList>();

export const AnimationStack = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContainer}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
