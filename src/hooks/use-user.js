import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

import React from 'react';

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      //we need a function that we can call (firebase service) that gets the user data based on the id
      const [response] = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return <div></div>;
};

export default useUser;
