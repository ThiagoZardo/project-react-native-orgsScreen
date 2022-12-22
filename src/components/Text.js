import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Text = ({ children, style }) => {
  return(
    <Text style={ [style, styles.text] }>{ children }</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial'
  }
})

export default Text;