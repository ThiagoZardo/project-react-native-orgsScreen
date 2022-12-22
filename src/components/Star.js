import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import star from '../assets/estrela.png';
import starGray from '../assets/estrelaCinza.png';

export default function Star({
  onPress,
  isDisable = true,
  completed,
  isBig = false
}) {
  const styles = stylesStar(isBig)

  const getImage = () => {
    if (completed) return star;
    return starGray;
  }

  return <>
    <TouchableOpacity
      onPress={onPress}
      disable={isDisable}
    >
      <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
  </>
}

const stylesStar = (isBig) => StyleSheet.create({
  star: {
    width: isBig ? 36 : 12,
    height: isBig ? 36 : 12,
  },
});
