import axios from 'axios';
import firestore from '@react-native-firebase/firestore';

export const initMenu = () => {
  return () => {
    return axios.get('/cat.php').then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      },
    );
  };
};

export const fetchMenu = () => {
  return async () => {
    const querySnap = await firestore().collection('theme').get();

    console.log(querySnap.docs);
  };
};

// const menu = {
//   kitchen: {
//     id: 0,
//     title: {
//       ru: 'Кухня',
//       en: 'Kitchen',
//       kg: 'lorem',
//     },
//     icon: 'kitchen',
//     categories: [
//       {
//         id: 321,
//         title: 'Паста',
//         description: {
//           ru: 'ru desc',
//           en: 'en desc',
//           kg: 'kg desc',
//         },
//         image: 'https://...',
//         dishes: [
//           {
//             id: 123,
//             title: 'Макароны',
//             description: 'lorem ipsum',
//             images: ['https://...', 'https://...', 'https://...'],
//             price: 200,
//             tags: {
//               withAllergen: false, //С аллергеном
//               spicy: true, //Острое
//               vegetarian: true, //Вегетарианское
//               glutenFree: false, //Без глютена
//             },
//           },
//         ],
//       },
//     ],
//   },
//   bar: {
//     id: 1,
//     title: 'Бар',
//     icon: 'bar',
//     categories: [
//       {
//         id: 446,
//         title: 'Вино',
//         description: 'lorem ipsum',
//         image: 'https://...',
//         dishes: [
//           {
//             id: 123,
//             title: 'Красное',
//             description: 'lorem ipsum',
//             images: ['https://...', 'https://...', 'https://...'],
//             price: 500,
//             tags: {
//               withAllergen: false, //С аллергеном
//               spicy: false, //Острое
//               vegetarian: false, //Вегетарианское
//               glutenFree: false, //Без глютена
//             },
//           },
//         ],
//       },
//     ],
//   },
//   sushi: {
//     id: 2,
//     title: 'Суши',
//     icon: 'sushi',
//     categories: [
//       {
//         id: 789,
//         title: 'Филадельфия',
//         description: 'lorem ipsum',
//         image: 'https://...',
//         dishes: [
//           {
//             id: 876,
//             title: 'Филадельфия',
//             description: 'lorem ipsum',
//             images: ['https://...', 'https://...', 'https://...'],
//             price: 800,
//             tags: {
//               withAllergen: false, //С аллергеном
//               spicy: true, //Острое
//               vegetarian: false, //Вегетарианское
//               glutenFree: false, //Без глютена
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
