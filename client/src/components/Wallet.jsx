import React, { useState } from "react";

function Wallet() {
  const [amount, setAmount] = useState(0);
  const [modalType, setModalType] = useState(null);
  const [inputAmount, setInputAmount] = useState(0);

  const openAddModal = () => {
    setModalType("add");
  };

  const openDeductModal = () => {
    setModalType("deduct");
  };

  const handleAmountChange = () => {
    if (modalType === "add") {
      setAmount(amount + inputAmount);
    } else if (modalType === "deduct") {
      if (inputAmount > amount) {
        alert("You don't have enough funds in your wallet.");
      } else {
        setAmount(amount - inputAmount);
      }
    }
    setModalType(null);
    setInputAmount(0);
  };

  const closeModal = () => {
    setModalType(null);
    setInputAmount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        style={{ width: "200px" }}
        src="https://img.freepik.com/free-vector/hand-with-wallet-money-icon-isolated_18591-82231.jpg?semt=ais_hybrid"
        alt="Wallet"
      />
      <h1 className="text-lg font-semibold mb-4">Amount: ₹{amount}</h1>

      {/* Buttons for adding or deducting amount */}
      <div className="flex gap-4">
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Amount
        </button>
        <button
          onClick={openDeductModal}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Deduct Amount
        </button>
      </div>

      {/* Modal for Add/Deduct Amount */}
      {modalType && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">
              {modalType === "add" ? "Add Amount" : "Deduct Amount"}
            </h2>
            <input
              type="number"
              value={inputAmount}
              onChange={(e) =>
                setInputAmount(
                  Number(e.target.value) > 0 ? Number(e.target.value) : 0
                )
              }
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Enter amount"
              min="0"
            />
            <div className="flex justify-between">
              <button
                onClick={handleAmountChange}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
