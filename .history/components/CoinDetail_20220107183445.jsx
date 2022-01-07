import LineChart from '../components/LineChart';
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
      <div className="w-[400px] h-[400px]">
        <LineChart />
      </div>
    </div>
  );
};

export default CoinDetail;
