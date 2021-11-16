import Header from '../components/Header'
import Head from 'next/head'
import '../styles/globals.css';
import { SWRConfig } from 'swr';
import DataProvider from '../store/GlobalState';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.npoint.io/46cd252be1391a1013ce';

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <SWRConfig value={{
        fetcher: async (url) => {
          return await axios(url).then(res => res.data)
        },
        dedupingInterval: 10000,
      }}>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </SWRConfig>
    </DataProvider>
  )
}

export default MyApp
