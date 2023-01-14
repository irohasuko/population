import { useState } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Selector from './components/Selector';

export default function Home() {
  const [population, setPopulation] = useState([]);
  return (
    <>
      <Head>
        <title>都道府県別人口推移</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Selector setPopulation={setPopulation} />
      {population.map((data) => (
        <div key={data.prefId}>{data.name}</div>
      ))}
    </>
  );
}
