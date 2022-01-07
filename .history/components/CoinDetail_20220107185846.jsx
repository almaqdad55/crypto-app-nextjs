import LineChart from '../components/LineChart';
import HTMLReactParser from 'html-react-parser';

const CoinDetail = ({ coinDetails }) => {
  const {
    id,
    symbol,
    name,
    categories,
    description,
    image,
    market_cap_rank,
    market_data,
    links,
  } = coinDetails;
  console.log(coinDetails);
  console.log(id);
  return (
    <div className="flex flex-col items-center w-full p-12 mt-10">
      <h1>
        {name} ({symbol.toUpperCase()}) Price and Market Stats{' '}
      </h1>
      <div className="w-[400px] h-[400px] ">
        <LineChart />
      </div>
      <div className="flex flex-col shadow-md rounded-lg bg-gray-100">
        <h1>
          {name}({symbol.toUpperCase()}) Price and Market Stats
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <p>{symbol.toUpperCase()}</p>
            <p>{market_data.current_price.aud}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Market Cap</p>
            <p>{market_data.market_cap.aud}</p>
          </div>
          <div className="flex items-center">
            <p>Market Cap Dominance</p>
            <p></p>
          </div>
          <div className="flex items-center">
            <p>Trading Volume</p>
            <p>{market_data.total_volume.aud}</p>
          </div>
          <div className="flex items-center">
            <p>Volume / Market Cap</p>
            <p></p>
          </div>
          <div className="flex items-center">
            <p>24h Low / 24h High</p>
            <p>
              {market_data.low_24h.aud} / {market_data.high_24h.aud}{' '}
            </p>
          </div>
          <div className="flex items-center">
            <p>Market Cap Rank</p>
            <p>{market_data.market_cap_rank}</p>
          </div>
          <div className="flex items-center">
            <p>All-Time High</p>
            <p></p>
          </div>
          <div className="flex items-center">
            <p>All-Time Low</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
