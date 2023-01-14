import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './components/Header';
import Selector from './components/Selector';
import Graph from './components/Graph';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Home() {
  const [population, setPopulation] = useState([]);
  return (
    <>
      <Head>
        <title>都道府県別人口推移</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content>
        <Selector setPopulation={setPopulation} />
        <Graph population={population} />
      </Content>
    </>
  );
}
