import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

export function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <div className="bg-zinc-900 p-4">
      <h3 className="text-slate-300 text-xl font-bold my-2 text-center">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
