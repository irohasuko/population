import Head from 'next/head';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>都道府県別人口推移</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
