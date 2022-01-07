import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';
import Login from '../components/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';

export default function Home({ providers, coins }) {
  // console.log(providers);

  console.log(coins);
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
  const coins = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    {
      method: 'GET',
      headers: { 'X-CMC_PRO_API_KEY': '195e47ad-c0e2-4a1e-b52f-4cf14b52f85a' },
    }
  ).then((res) => res.json());
  return {
    props: {
      providers,
      session,
      coins,
    },
  };
}
