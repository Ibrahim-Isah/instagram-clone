import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  //console.log(result);
  return result.docs.map((user) => user.data().length > 0);
}

//get user from the firestore where userId === userId (passed grom the auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const user = await result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}
