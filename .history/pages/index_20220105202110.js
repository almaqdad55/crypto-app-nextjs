import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';
import Login from '../components/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';

export default function Home({ providers, coinsData }) {
  // console.log(providers);

  console.log(coinsData);
  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;

  // console.log(session);

  return (
    <div className="">
      <Head>
        <title>Crypto Trade</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Feed />
        <Widget />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  // const coins = await fetch(
  //   'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  //   {
  //     method: 'GET',
  //     headers: { 'X-CMC_PRO_API_KEY': '195e47ad-c0e2-4a1e-b52f-4cf14b52f85a' },
  //   }
  // ).then((res) => res.json());

  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );

  const coinsData = await res.json();
  return {
    props: {
      providers,
      session,
      coinsData,
    },
  };
}
