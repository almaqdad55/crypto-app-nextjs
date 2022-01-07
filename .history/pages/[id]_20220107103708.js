import Head from 'next/head';
import CoinDetail from '../components/CoinDetail';

const CoinDetails = ({
  id,
  aymbol,
  name,
  description,
  image,
  market_cap_rank,
}) => {
  console.log();
  return (
    <>
      <Head>
        <title>Title</title>
        <meta
          name="descritpion"
          content="Browse a hige list od higlty active meetups"
        />
      </Head>
      <div>{description}</div>
      <CoinDetail />
    </>
  );
};

export default CoinDetails;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`
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

// export async function getServerSideProps(context) {
//     const { id } = context.query;
//     const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
//     `);
//     const data = await res.json();
// return {
//         props: {
//             coin: data
//         }
//     };
// }
