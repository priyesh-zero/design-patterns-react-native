import {DrawerNavigationProp} from '@react-navigation/drawer';

export type AnimationStackRootList = {
  Home: undefined;
};

export type HomeScreen = DrawerNavigationProp<AnimationStackRootList, 'Home'>;
