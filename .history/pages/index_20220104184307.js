import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="max-w-[1440px] h-screen bg-red-300">
      <Head>
        <title>Crypto Trade</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <Sidebar />
        {/* Feed */}
        {/* Widget */}
      </main>
    </div>
  );
}
