/* eslint-disable object-curly-newline */
import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { getFirstLetter } from '../utils/helpers';
import * as RootNavigation from '../utils/RootNavigation';
import NavbarContext from '../context/navbar/navbarContext';
import FireBaseContext from '../context/firebase/firebaseContext';
import { getProjectMessages } from '../utils/helpers';

const styles = StyleSheet.create({
  item: {
    padding: 12,
    flexDirection: 'row',
  },
  initial: {
    fontSize: 24,
    color: '#1B1B1B',
  },
  info: {
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  secondary: {
    fontSize: 14,
    color: 'white',
  },
  center: {
    alignItems: 'center',
  },
  separator: {
    opacity: 0.1,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    width: '90%',
  },
});

const Item = ({ item }) => {
  const { name, color, key } = item;

  const { setNavbarHidden } = useContext(NavbarContext);
  const { messages } = useContext(FireBaseContext);

  const circle = {
    height: 44,
    width: 44,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
  };

  const offset = useSharedValue(1);

  useEffect(() => {
    offset.value = 0;
    return () => {
      offset.value = 10;
    };
  }, []);

  const customSpringStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(offset.value * 255, {
          damping: 20,
          stiffness: 90,
        }),
      },
    ],
  }));

  if (!messages) return null;

  if (item.owners.length < 2) return null;

  return (
    <View>
      <Pressable
        onPress={() => {
          setNavbarHidden(true);
          RootNavigation.navigate('Chat', { item });
        }}
        style={styles.item}
      >
        <View style={circle}>
          <Text style={styles.initial}>{getFirstLetter(name)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.secondary}>
            {getProjectMessages(messages, key)[0]
              ? getProjectMessages(messages, key)[0].text
              : null}
          </Text>
        </View>
      </Pressable>
      <View style={styles.center}>
        <View style={styles.separator} />
      </View>
    </View>
  );
};

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;