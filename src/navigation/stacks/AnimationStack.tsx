import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AnimationStackRootList} from './types/AnimationStack';
import {Home} from '../screens/Home';
import {DrawerContainer} from './drawer';
import {ParalaxTop} from '../screens/ParalaxTop';

const Drawer = createDrawerNavigator<AnimationStackRootList>();

export const AnimationStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContainer}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="ParalaxTop"
        component={ParalaxTop}
        options={{title: 'Hero Image Paralax'}}
      />
    </Drawer.Navigator>
  );
};
