import Searchbar from '../components/Searchbar';
import { useState } from 'react';
const coins = ({ coinsData }) => {
  //   coinsData.forEach((coin) => console.log(coin.sparkline_in_7d.price));
  console.log(coinsData);

  const [search, setSearch] = useState('');

  return (
    <>
      <Searchbar />
      <div className="container flex justify-center mx-auto mt-20">
        <div className="flex flex-col">
          <div className="w-full">
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
                <tbody className="bg-white divide-y divide-gray-300">
                  {coinsData.map(
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
                      <tr key={id} className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {' '}
                          {market_cap_rank}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="flex items-center space-x-2">
                            <img src={image} alt="" className="h-5" />
                            <p>{name}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {/* {current_price} */}
                            {/* A$ {numWithCommas(current_price)} */}
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
