import Head from 'next/head'
import HomeComponent from 'src/screens/home/HomeComponents';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Construtop Ingenieria</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <HomeComponent />
    </div>
  )
}
