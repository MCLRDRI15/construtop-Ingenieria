import Head from 'next/head'
import HomeComponent from 'src/screens/home/HomeComponents';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Construtop Ingenieria</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="icon" href='/favicon.ico'></link>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <HomeComponent />
    </div>
  )
}
