import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const GET_MY_TODOS = gql`
  query MyQuery {
    test {
        id
        some_string
    }
}`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_MY_TODOS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  console.log(data)
  return <div>Success</div>;
}
