import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getPhotos } from '../services/firebase';

const usePhotos = (user) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimeLinePhotos() {
      //exapmple: [ 2,1,5 ] -> 2 = mohammed
      if (user?.following.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);

        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    }

    getTimeLinePhotos();
  }, [user?.userId]);

  return { photos };
};

export default usePhotos;
