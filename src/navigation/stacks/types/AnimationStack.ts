import {DrawerNavigationProp} from '@react-navigation/drawer';

export type AnimationStackRootList = {
  Home: undefined;
  ParalaxTop: undefined;
};

export type HomeScreen = DrawerNavigationProp<AnimationStackRootList, 'Home'>;

export type ParalaxTop = DrawerNavigationProp<
  AnimationStackRootList,
  'ParalaxTop'
>;
