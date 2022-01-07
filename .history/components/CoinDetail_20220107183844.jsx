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
    <div className="flex flex-col items-center justify-center ">
      <h1>
        {name} ({symbol.toUpperCase()}) Price and Market Stats{' '}
      </h1>
      <div className="w-[400px] h-[400px] mx-auto">
        <LineChart />
      </div>
    </div>
  );
};

export default CoinDetail;
