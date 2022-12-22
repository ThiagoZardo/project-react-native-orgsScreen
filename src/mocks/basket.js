import logo from '../../assets/logo.png';
import tomato from '../../assets/frutas/Tomate.png';
import broccoli from '../../assets/frutas/Brócolis.png';
import potato from '../../assets/frutas/Batata.png';
import cucumber from '../../assets/frutas/Pepino.png';
import pumpkin from '../../assets/frutas/Abóbora.png';

const basket = {
  header: {
    title: 'Detalhes da Cesta',
  },
  details: {
    name: 'Cesta de Verduras',
    logoFarm: logo,
    nameFarm: 'Jenny Jack Farm',
    description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
    price: 'R$ 40,00',
    buttonPurchase: 'Comprar',
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomato,
      },
      {
        name: "Brócolis",
        image: broccoli,
      },
      {
        name: "Batata",
        image: potato,
      },
      {
        name: "Pepino",
        image: cucumber,
      },
      {
        name: "Abóbora",
        image: pumpkin,
      }
    ]
  }
}

export default basket;