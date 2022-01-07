import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';
import Login from '../components/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';
// import { coinsDataState } from '../atoms/coinAtom';
// import { useRecoilValue, useRecoilState } from 'recoil';
// import { useEffect } from 'react';

export default function Home({ providers }) {
  // console.log(providers);

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

  return {
    props: {
      providers,
      session,
    },
  };
}
