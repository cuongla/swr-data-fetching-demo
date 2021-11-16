import axios from 'axios';
import Head from 'next/head';
import Page from '../components/Page';
import UserInput from '../components/UserInput';
import getQueryUrl from '../utils/getQueryUrl';

export default function Home({ initUsers }) {
  const { page, limit, search } = getQueryUrl();


  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='user_input_container'>
          <UserInput />
        </div>

        <div style={{ display: 'none' }}>
          <Page
            initUsers={initUsers}
            page={page - 1}
            limit={limit}
            search={search}
          />
        </div>

        <Page
          initUsers={initUsers}
          page={page}
          limit={limit}
          search={search}
        />

        <div style={{ display: 'none' }}>
          <Page
            initUsers={initUsers}
            page={page + 1}
            limit={limit}
            search={search}
          />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  let url = `/users?_sort=createdAt&_order=desc`
  const res = await axios.get(url)

  return {
    props: {
      initUsers: res.data
    },
    revalidate: 10,
  };
}