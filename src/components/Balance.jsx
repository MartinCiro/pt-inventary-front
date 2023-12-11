import { useGlobalState } from "../context/GlobalState";

export function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="form-group">
      <label className="text-slate-400">Ingreso mensual</label>
      <input
  type="text"
  placeholder={total}
  className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
  value={total} disabled
/>

    </div>
  );
}
