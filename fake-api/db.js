// index.js
module.exports = () => {
  const data = { users: [], about: [] };
  // Create 1000 users
  for (let i = 0; i < 10; i++) {
    data.users.push({
      id: i,
      name: `user${i}`,
      image: `https://picsum.photos/200/300`,
    });
    data.about.push({
      id: i,
      name: `user${i}`,
      image: `https://picsum.photos/200/${i + 1}00`,
    });
  }
  return data;
};
