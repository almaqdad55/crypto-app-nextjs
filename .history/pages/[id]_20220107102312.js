import Head from 'next/head';
import CoinDetail from '../components/CoinDetail';

const CoinDetails = () => {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta
          name="descritpion"
          content="Browse a hige list od higlty active meetups"
        />
      </Head>
      <CoinDetail />
    </>
  );
};

export default CoinDetails;

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/cardano?sparkline=true`
  );
  const coinDetails = await res.json();

  if (!coinDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: { coinDetails }, // will be passed to the page component as props
  };
}
