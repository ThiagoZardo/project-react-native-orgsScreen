import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../../assets/logo.png'
import { chargeheader } from '../../../services/chargeData';
import header from '../../../mocks/header';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={logo} />
      <Text style={styles.welcome}>{header.welcome}</Text>
      <Text style={styles.legend}>{header.legend}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },

  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },

  legend: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  }
})