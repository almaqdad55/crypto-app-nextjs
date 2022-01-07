const cryptocurrencies = ({ coinsData }) => {
  console.log(coinsData);
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>{'  '}</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th> 24h Volume</th>
            <th>Mkt Cap</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coinsData.map((coin) => (
            <tr>
              <td>{coin.market_cap_rank}</td>
            </tr>
          ))}
        </tbody>
        {/* <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
};

export default cryptocurrencies;

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y'
  );
  const coinsData = await res.json();
  return {
    props: {
      coinsData,
    },
  };
}
