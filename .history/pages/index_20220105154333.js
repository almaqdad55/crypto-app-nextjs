import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';
import Login from '../components/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';

export default function Home({ providers }) {
  console.log(providers);
  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;

  console.log(session);

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

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
