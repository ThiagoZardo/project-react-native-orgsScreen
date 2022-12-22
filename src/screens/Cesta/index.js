import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import Details from './components/Details';
import Item from '../../components/Item';

const Basket = ({ header, details, items }) => {
  return (
    <>
      <FlatList
        data={ items.list }
        renderItem={ Item }
        keyExtractor={ ({ name }) => name}
        ListHeaderComponent={() => {
          return <>
            <Header { ...header } />
            <View style={ styles.basket }>
              <Details { ...details } />
              <Text style={ styles.title }>{ items.title }</Text>
            </View>
          </>
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
})

export default Basket;