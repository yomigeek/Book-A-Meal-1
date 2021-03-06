export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('meals', [{
    userId: 22,
    title: 'Rice and stew',
    description: 'Nigerian rice and stew',
    price: 300,
    img: 'https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg'
  },
  {
    userId: 22,
    title: 'Beef with rice',
    description: 'Fried rice and beef',
    price: 500,
    img: 'https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg'
  },
  {
    userId: 22,
    title: 'Beef with fries',
    description: 'French fries and beef',
    price: 1200,
    img: 'https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg'
  }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('meals', null, {})
};
