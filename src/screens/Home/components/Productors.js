import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { chargeProductors } from '../../../services/chargeData';
import Productor from './Productor';
import useProductors from '../../../hooks/useProdusctors';

export default function Productors({ header: Header }) {
  const [title, list] = useProductors();

  const headerList = () => {
    return <>
      <Header />
      <Text style={styles.title}>{title}</Text>
    </>
  }

  return (
    <>
      <FlatList
        data={list}
        renderItem={({ item }) => <Productor {...item} />}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={headerList}
      />
    </>

  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },

})