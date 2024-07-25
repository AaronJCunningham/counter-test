import { useContractRead } from "wagmi";

const counterAbi = [
  {
    constant: true,
    inputs: [],
    name: "getNumber",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const contractConfig = {
  abi: counterAbi,
  chainId: 11155111,
};

function DisplayNumber() {
  const {
    data: number,
    error,
    isFetching: isPending,
  } = useContractRead({
    ...contractConfig,
    address: "0x84d34e43c7333cdc27fbb829738f7a51e5fb248c",
    functionName: "getNumber",
  });

  console.log("number", number);
  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return <div>Number: {number?.toString()}</div>;
}

export default DisplayNumber;
