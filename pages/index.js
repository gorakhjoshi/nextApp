import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Next App</h1>
      <Link href="/profiles">
        <a className={styles.link}>Profile Page</a>
      </Link>
    </div>
  );
}

export default Home;
