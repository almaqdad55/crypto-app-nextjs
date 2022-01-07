import Searchbar from '../components/Searchbar';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { coinsDataState } from '../atoms/coinAtom';

const coins = ({ coinsData }) => {
  const [search, setSearch] = useState('');
  const [cryptos, setCryptos] = useState([]);

  const filteredData = coinsData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredData);

  return (
    <>
      <Searchbar
        type="text"
        placeholder={`Search Cryptocurrency`}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        // onChange={handleChange}
      />
      <div className="container flex justify-center mx-auto mt-20 ">
        <div className="flex flex-col">
          <div className="w-full h-3/6 overflow-y-scroll">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">#</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Coin</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Price</th>
                    <th className="px-6 py-2 text-xs text-gray-500">1h</th>
                    <th className="px-6 py-2 text-xs text-gray-500">24h</th>

                    <th className="px-6 py-2 text-xs text-gray-500">
                      24h Volume
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Mkt Cap</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Last 7 Days
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300   ">
                  {filteredData.map(
                    ({
                      id,
                      name,
                      market_cap_rank,
                      current_price,
                      symbol,
                      price_change_percentage_1h_in_currency,
                      market_cap_change_percentage_24h,
                      total_volume,
                      market_cap,
                      image,
                    }) => (
                      <tr
                        key={id}
                        className="whitespace-nowrap odd:bg-gray-200 even:bg-green-100"
                      >
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {' '}
                          {market_cap_rank}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="flex items-center space-x-2">
                            <img src={image} alt="" className="h-7" />
                            <div className="flex flex-col">
                              <p>{name}</p>
                              <p className="text-gray-500">
                                {symbol.toUpperCase()}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'aud',
                            }).format(current_price)}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          % {price_change_percentage_1h_in_currency.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          % {market_cap_change_percentage_24h.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'aud',
                          }).format(total_volume)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'aud',
                          }).format(market_cap)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          last 7 day
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default coins;

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y'
  );
  const coinsData = await res.json();

  if (!coinsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { coinsData }, // will be passed to the page component as props
  };
}
