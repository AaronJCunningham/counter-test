import { Account } from "@/components/wagmi/Account";
import { WalletOptions } from "@/components/wagmi/WalletOptions";
import { useAccount } from "wagmi";
import DisplayNumber from "@/components/wagmi/DisplayNumber";
import SetNumber from "@/components/wagmi/SetNumber";

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-gray-900">
      <div className="flex flex-col items-center justify-center bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6 w-full flex items-center justify-center">
          <ConnectWallet />
        </div>
        <div className="mb-6 w-full flex items-center justify-center">
          <DisplayNumber />
        </div>
        <div className="w-full flex items-center justify-center">
          <SetNumber />
        </div>
      </div>
    </main>
  );
}
