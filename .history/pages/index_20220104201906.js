import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';

export default function Home() {
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
