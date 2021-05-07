import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSquare from './ColorSquare';

const styles = StyleSheet.create({
  colorContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 18,
    height: 180,
    maxWidth: '100%',
  },
});
const ColorContainer = ({ colors, selectedHandler, selectedColor }) => (
  <View style={styles.colorContainer}>
    {colors.map((color) => (
      <ColorSquare
        key={color.color}
        color={color.color}
        isSelected={color.color === selectedColor}
        selectedHandler={selectedHandler}
      />
    ))}
  </View>
);

export default ColorContainer;