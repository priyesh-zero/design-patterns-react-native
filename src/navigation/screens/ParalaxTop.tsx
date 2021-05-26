import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, Dimensions} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';

const CONSTANTS = {
  IMAGE_HEIGHT: 400,
  WINDOW_HEIGHT: Dimensions.get('window').height,
};

export const ParalaxTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollOffsetY = useSharedValue(0);
  const translateY = useDerivedValue(() => {
    return interpolate(
      scrollOffsetY.value,
      [0, Math.abs(CONSTANTS.WINDOW_HEIGHT - scrollHeight)],
      [
        0,
        Math.abs(CONSTANTS.WINDOW_HEIGHT - scrollHeight) -
          CONSTANTS.IMAGE_HEIGHT,
      ],
    );
  }, [scrollHeight]);
  const scrollAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  const handleScrollEvent = useAnimatedScrollHandler(
    {
      onScroll: event => {
        scrollOffsetY.value = event.contentOffset.y;
      },
    },
    [],
  );
  return (
    <>
      <StatusBar hidden={true} />
      <Animated.ScrollView
        onContentSizeChange={(_, height) => {
          setScrollHeight(height);
        }}
        onScroll={handleScrollEvent}>
        <Animated.Image
          style={[styles.image, scrollAnimation]}
          source={{
            uri: 'https://source.unsplash.com/random/1600x900/?love,couple',
          }}
        />
        <Text style={[styles.para]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod a
          dolor odio qui quia, placeat nulla asperiores recusandae voluptatibus
          pariatur temporibus ipsam ex! Doloremque ipsam nesciunt sed
          voluptatibus optio nostrum obcaecati beatae quis inventore, blanditiis
          recusandae. Ullam error natus est ad in voluptatem dolor deleniti,
          distinctio excepturi necessitatibus quam!
        </Text>
        <Text style={[styles.para]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod a
          dolor odio qui quia, placeat nulla asperiores recusandae voluptatibus
          pariatur temporibus ipsam ex! Doloremque ipsam nesciunt sed
          voluptatibus optio nostrum obcaecati beatae quis inventore, blanditiis
          recusandae. Ullam error natus est ad in voluptatem dolor deleniti,
          distinctio excepturi necessitatibus quam!
        </Text>
        <Text style={[styles.para]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod a
          dolor odio qui quia, placeat nulla asperiores recusandae voluptatibus
          pariatur temporibus ipsam ex! Doloremque ipsam nesciunt sed
          voluptatibus optio nostrum obcaecati beatae quis inventore, blanditiis
          recusandae. Ullam error natus est ad in voluptatem dolor deleniti,
          distinctio excepturi necessitatibus quam!
        </Text>
        <Text style={[styles.para]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod a
          dolor odio qui quia, placeat nulla asperiores recusandae voluptatibus
          pariatur temporibus ipsam ex! Doloremque ipsam nesciunt sed
          voluptatibus optio nostrum obcaecati beatae quis inventore, blanditiis
          recusandae. Ullam error natus est ad in voluptatem dolor deleniti,
          distinctio excepturi necessitatibus quam!
        </Text>
        <Text style={[styles.para]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod a
          dolor odio qui quia, placeat nulla asperiores recusandae voluptatibus
          pariatur temporibus ipsam ex! Doloremque ipsam nesciunt sed
          voluptatibus optio nostrum obcaecati beatae quis inventore, blanditiis
          recusandae. Ullam error natus est ad in voluptatem dolor deleniti,
          distinctio excepturi necessitatibus quam!
        </Text>
        <Text style={[styles.para]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod a
          dolor odio qui quia, placeat nulla asperiores recusandae voluptatibus
          pariatur temporibus ipsam ex! Doloremque ipsam nesciunt sed
          voluptatibus optio nostrum obcaecati beatae quis inventore, blanditiis
          recusandae. Ullam error natus est ad in voluptatem dolor deleniti,
          distinctio excepturi necessitatibus quam!
        </Text>
        <Text style={[styles.para]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod a
          dolor odio qui quia, placeat nulla asperiores recusandae voluptatibus
          pariatur temporibus ipsam ex! Doloremque ipsam nesciunt sed
          voluptatibus optio nostrum obcaecati beatae quis inventore, blanditiis
          recusandae. Ullam error natus est ad in voluptatem dolor deleniti,
          distinctio excepturi necessitatibus quam!
        </Text>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    padding: 10,
  },
  para: {
    textAlign: 'justify',
    marginBottom: 20,
    color: '#333',
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: CONSTANTS.IMAGE_HEIGHT,
    zIndex: 1,
  },
});
