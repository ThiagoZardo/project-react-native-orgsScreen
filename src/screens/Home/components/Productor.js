import React, { useReducer, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import Starts from '../../../components/Stars';

const distanceInMeters = (distance) => {
  return `${distance}m`;
};

export default function Productor({ name, image, distance, starts }) {
  const [selected, invertSelected] = useReducer((selected) => !selected, false);
  const distanceText = useMemo(() => distanceInMeters(distance), [distance]);

  return <>
    <TouchableOpacity
      style={styles.card}
      onPress={invertSelected}
    >
      <Image style={styles.image} source={image} accessibilityLabel={name} />
      <View style={styles.infos}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Starts
            quantity={starts}
            edit={selected}
            isBig={selected}
          />
        </View>
        <Text style={styles.distance}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    // iOS
    shadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    // Android
    elevation: 4,
  },

  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },

  infos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },

  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },

  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});