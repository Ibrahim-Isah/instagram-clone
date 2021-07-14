/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
// eslint-disable-next-line max-len
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'qZ2xswGjZufKtOeZqX1ufRSELrn2',
      username: 'isah',
      fullName: 'Isah Ibrahim',
      emailAddress: 'isahibn08@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now(),
    },
    {
      userId: '2',
      username: 'maimuna',
      fullName: 'Maimuna Isah Ibrahim',
      emailAddress: 'maimuna@ibrahim.com',
      following: [],
      followers: ['qZ2xswGjZufKtOeZqX1ufRSELrn2'],
      dateCreated: Date.now(),
    },
    {
      userId: '3',
      username: 'halima',
      fullName: 'Halima Maiwada',
      emailAddress: 'Halima@wada.com',
      following: [],
      followers: ['qZ2xswGjZufKtOeZqX1ufRSELrn2'],
      dateCreated: Date.now(),
    },
    {
      userId: '4',
      username: 'mohammed',
      fullName: 'Mohammed Ibrahim',
      emailAddress: 'mohammed@mail.com',
      following: [],
      followers: ['qZ2xswGjZufKtOeZqX1ufRSELrn2'],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/halima/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'isah',
            comment: 'Love this place, looks like my animal farm!',
          },
          {
            displayName: 'mohammed',
            comment: 'Would you mind if I used this picture?',
          },
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now(),
      });
  }
}
