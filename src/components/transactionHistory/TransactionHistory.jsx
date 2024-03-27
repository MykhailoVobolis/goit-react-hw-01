import TransactionItem from "./TransactionItem";

import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionTab}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <TransactionItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
