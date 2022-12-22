import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Item = ({ item: { name, image } }) => {
  return <View style={ styles.item }>
    <Image source={ image } style={ styles.image }/>
    <Text style={ styles.nameIngredient }>{ name }</Text>
  </View>
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  image: {
    width: 46,
    height: 46,
  },
  nameIngredient: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  }
});

export default Item;