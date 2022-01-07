const TransactionHistory = () => {
  return (
    <div>
      <h1>Transaction History</h1>

      <div>
        <p>Transaction In April 2021</p>
        <p>$50,000</p>
      </div>
      <div className="">
        <img src="/history.svg" alt="" className="bg-red-300" />
        <img src="/months.svg" alt="" className="bg-red-300" />
      </div>
    </div>
  );
};

export default TransactionHistory;
