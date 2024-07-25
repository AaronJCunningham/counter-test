import { useAccount } from "wagmi";
import { useState } from "react";
import { ethers } from "ethers";

const abi = ["function setNumber(uint256 newNumber) external"];

function SetNumber() {
  const { address, isConnected } = useAccount();
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [number, setNumber] = useState<number | null>(null);

  const handleClick = async () => {
    try {
      if (!isConnected || !address) {
        throw new Error("Please connect to MetaMask.");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        "0x84d34e43c7333cdc27fbb829738f7a51e5fb248c",
        abi,
        signer
      );

      if (number === null) {
        throw new Error("Number is not set.");
      }

      const tx = await contract.setNumber(number);
      setTransactionHash(tx.hash);
      await tx.wait();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number !== null ? number.toString() : ""}
        placeholder="0"
        className="rounded-md text-black border border-gray-300 p-2 h-10"
      />

      <button
        className="bg-slate-400 text-white rounded-md p-2 h-10 hover:bg-slate-300"
        onClick={handleClick}
      >
        Set Number
      </button>

      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default SetNumber;
