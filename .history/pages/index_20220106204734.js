import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';
import Login from '../components/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';
import { coinsDataState } from '../atoms/coinAtom';

export default function Home({ providers, coinsData }) {
  // console.log(providers);

  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;
  console.log(session);

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
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y'
  );
  const filteredCoins = await res.json();

  return {
    props: {
      providers,
      session,
      filteredCoins,
    },
  };
}
