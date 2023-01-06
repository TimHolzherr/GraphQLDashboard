import Head from 'next/head';

import { Martel_Sans } from '@next/font/google';
import Mutations from '../components/mutations';

const martel = Martel_Sans({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const maxTitleLength = 13;
  return (
    <>
      <Head>
        <title>GraphQL Dashboard</title>
        <meta name="description" content="GraphQL Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={martel.className}>
        <Mutations />
      </main>
    </>
  );
}
