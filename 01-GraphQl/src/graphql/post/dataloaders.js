// import DataLoader from 'dataloader';

// export const makeUserDataLoader = (getUsers) => {
//   return new DataLoader(async (ids) => {
//     const urlQuery = ids.join('&id=');
//     const users = await getUsers('?id=' + urlQuery);
//     return ids.map((id) => users.find((user) => user.id === id));
//   });
// };

import DataLoader from 'dataloader';

export const makePostDataLoader = (getPosts) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&userId=');
    const posts = await getPosts('?userId=' + urlQuery);
    return ids.map((id) => {
      return posts.filter((posts) => posts.userId === id);
    });
  });
};
