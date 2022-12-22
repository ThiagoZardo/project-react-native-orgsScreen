import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const generateNumRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const productors = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: green,
      distance: generateNumRandom(1, 500),
      starts: generateNumRandom(1, 5)
    },
    {
      name: 'Salad',
      image: salad,
      distance: generateNumRandom(1, 500),
      starts: generateNumRandom(1, 5)
    },
    {
      name: 'Jenny Jack',
      image: jennyJack,
      distance: generateNumRandom(1, 500),
      starts: generateNumRandom(1, 5)
    },
    {
      name: 'Grow',
      image: grow,
      distance: generateNumRandom(1, 500),
      starts: generateNumRandom(1, 5)
    },
    {
      name: 'Potager',
      image: potager,
      distance: generateNumRandom(1, 500),
      starts: generateNumRandom(1, 5)
    },
  ],
}

export default productors;
