const user = () => {
  return {
    id: 'a1b2hmg34mdms',
    userName: 'Dayan',
  };
};

const users = () => {
  return [
    {
      id: 'a1b2hmg34hdms',
      userName: 'Dayan',
    },
    {
      id: 'b2b2hmg26hlvf',
      userName: 'Laryssa',
    },
    {
      id: 'c3b2hmg34hpvm',
      userName: 'Pietra',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
