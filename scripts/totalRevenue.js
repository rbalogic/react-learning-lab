const transactions = [
  { id: 1, type: "sale", amount: 50 },
  { id: 2, type: "sale", amount: 120 },
  { id: 3, type: "refund", amount: 30 },
  { id: 4, type: "sale", amount: 80 },
  { id: 5, type: "refund", amount: 15 },
];

const initialRevenue = { totalRefunded: 0, totalRevenue: 0 };

const finalSummary = transactions.reduce((summary, transaction) => {
  if (transaction.type === "refund") {
    summary.totalRefunded += transaction.amount;
  } else {
    summary.totalRevenue += transaction.amount;
  }
  return summary;
}, initialRevenue);

console.log(finalSummary);
