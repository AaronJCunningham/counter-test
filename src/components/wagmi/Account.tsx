import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div>
      <button
        className="bg-slate-400 text-white rounded-md p-2 h-10 hover:bg-slate-300"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>
    </div>
  );
}
