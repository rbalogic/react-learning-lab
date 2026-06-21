const customers = [
  { name: "Alice", activeAccount: true, totalSpent: 200 },
  { name: "Bob", activeAccount: false, totalSpent: 250 },
  { name: "Charlie", activeAccount: true, totalSpent: 80 },
  { name: "Diana", activeAccount: true, totalSpent: 175 },
  { name: "Evan", activeAccount: false, totalSpent: 50 },
];

const vipCustomers = customers.filter((customer) => {
  return customer.activeAccount && customer.totalSpent >= 150;
});

console.log(vipCustomers);
console.log(customers);
