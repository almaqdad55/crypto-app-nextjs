const coin = ({ coinsData }) => {
  return (
    <div className="container flex justify-center mx-auto mt-20">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="divide-y divide-gray-300 ">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">#</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Price</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Buy/Sell</th>
                  <th className="px-6 py-2 text-xs text-gray-500">1h</th>
                  <th className="px-6 py-2 text-xs text-gray-500">24h</th>
                  <th className="px-6 py-2 text-xs text-gray-500">7d</th>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    24h Volume
                  </th>
                  <th className="px-6 py-2 text-xs text-gray-500">Mkt Cap</th>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    Last 7 Days
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {coinsData.map((coin) => (
                  <tr key={coin.id} className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {' '}
                      {coin.market_cap_rank}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{coin.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        jhondoe@example.com
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      2021-1-12
                    </td>
                    <td className="px-6 py-4">malik</td>
                    <td className="px-6 py-4">kamal</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default coin;

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
