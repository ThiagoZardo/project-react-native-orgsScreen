import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Star from '../components/Star';

export default function Stars({
  quantity: quantitityOld,
  edit = false,
  isBig = false,
}) {
  const [quantity, setQuantity] = useState(quantitityOld);

  const RenderStars = () => {
    const listStar = [];
    for (let i = 0; i < 5; i += 1) {
      listStar.push(
        <Star
          key={i}
          onPress={() => setQuantity(i + 1)}
          isDisable={!edit}
          completed={i < quantity}
          isBig={isBig}
        />
      );
    }
    return listStar;
  };

  return <>
    <View style={styles.stars}>
      <RenderStars />
    </View>
  </>
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    marginRight: 2,
  },

})