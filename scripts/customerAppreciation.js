const users = [
  { id: 1, name: "Alice", isPremium: true },
  { id: 2, name: "Bob", isPremium: false },
  { id: 3, name: "Charlie", isPremium: true },
  { id: 4, name: "Diana", isPremium: false },
];

const creditInfo = users.map((user) => ({
  ...user,
  credit: user.isPremium ? 15 : 10,
}));

console.log(creditInfo);
console.log(users);
