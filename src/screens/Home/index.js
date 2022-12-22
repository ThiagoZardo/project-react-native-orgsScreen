import React from 'react';
import Header from './components/Header';
import Productors from './components/Productors';

export default function Home() {
  return (
    <>
      <Productors header={ Header } />
    </>
  )
}