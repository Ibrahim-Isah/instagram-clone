import { useEffect, useState } from 'react';
import { getUserByUserId } from '../services/firebase';

const useUser = (userId) => {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      //we need a function that we can call (firebase service) that gets the user data based on the id
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }
    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
};

export default useUser;
