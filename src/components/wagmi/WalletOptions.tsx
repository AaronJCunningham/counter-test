import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export function WalletOptions() {
  const { connect } = useConnect();

  return (
    <button
      className="bg-slate-400 text-white rounded-md p-2 h-10 hover:bg-slate-300"
      onClick={() => connect({ connector: injected() })}
    >
      Connect
    </button>
  );
}
