import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Button from './Button';

const Details = ({
  name,
  logoFarm,
  nameFarm,
  description,
  price,
  buttonPurchase 
}) => {
  return (
    <>
      <Text style={ styles.name }> { name } </Text>

      <View style={ styles.farm } >
        <Image source={ logoFarm } style={ styles.logoFarm } />
        <Text style={ styles.nameFarm }>{ nameFarm }</Text>
      </View>

      <Text style={ styles.description }>{ description }</Text>
      <Text style={ styles.price } >{ price }</Text>

      <Button text={ buttonPurchase }/>
    </>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    color: '#464646',
    lineHeight: 42,
    fontWeight: 'bold',
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  logoFarm: {
    width: 32,
    height: 32,
  },
});

export default Details;