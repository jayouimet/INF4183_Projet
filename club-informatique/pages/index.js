import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner/banner";
import Navbar from '../components/navbar/navbar';

export default function Home() {
    return <>
        <Navbar />
        <Banner title="Accueil" />
    </>
}
