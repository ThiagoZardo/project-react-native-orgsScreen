import { useState, useEffect } from 'react';
import { chargeProductors } from '../services/chargeData';

export default function useProductors() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const productors = chargeProductors();
    productors.list.sort(
      (productor1, productor2) => productor1.distance - productor2.distance
    );
    setTitle(productors.title);
    setList(productors.list);
  }, []);

  return [title, list]
}