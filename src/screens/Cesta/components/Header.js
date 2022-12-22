import React from 'react';
import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import headerBanner from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

const Header = ({ title }) => {
  return (
    <>
      <Image source={ headerBanner } style={ styles.header } />
      <Text style={ styles.title }>{ title }</Text>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: (578 / 768) * width,
    fontFamily: 'Monteserrat',
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
})

export default Header;