import Head from 'next/head';
import CoinDetail from '../components/CoinDetail';

const CoinDetails = ({ coinDetails }) => {
  //   console.log(coinDetails.description.en);
  return (
    <>
      <Head>
        <title>{coinDetails.name} price today, chart and market stats</title>
        <meta
          name="descritpion"
          content="Browse a hige list od higlty active meetups"
        />
        <img src="" alt="/logo.png" />
      </Head>

      <CoinDetail coinDetails={coinDetails} />
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
