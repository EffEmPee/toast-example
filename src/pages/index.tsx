import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>NextJS Kit</title>
    </Head>

    <h1>NextJS Structure</h1>
    <p>A NextJS + styled-components structure</p>
  </Container>
);

export default Home;
