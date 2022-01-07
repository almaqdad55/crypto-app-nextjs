import LineChart from '../components/LineChart';
import HTMLReactParser from 'html-react-parser';

const CoinDetail = ({ coinDetails }) => {
  const {
    id,
    symbole,
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
    <div>
      <h1>
        {name}({symbole})Price and Market Stats{' '}
      </h1>
      <div className="w-[400px] h-[400px] mx-auto">
        <LineChart />
      </div>
    </div>
  );
};

export default CoinDetail;
