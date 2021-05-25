import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AnimationStack} from './stacks/AnimationStack';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AnimationStack />
    </NavigationContainer>
  );
};
