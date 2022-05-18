import type { NextPage } from 'next';
import Head from 'next/head';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from '../styles/toastStyle';

import { Container } from '../styles/pages/Home';

const Home: NextPage = () => {
  const handleHotToastSuccess = () => toast.success('Sucesso!');
  const handleHotToastError = () => toast.error('Erro!');

  return (
    <>
      <StyledToastContainer />
      <Container>
        <Head>
          <title>Toast notify</title>
        </Head>

        <button type="button" onClick={handleHotToastSuccess}>
          <span>success</span>
        </button>
        <button type="button" onClick={handleHotToastError}>
          <span>error</span>
        </button>
      </Container>
    </>
  );
};

export default Home;
