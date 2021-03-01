import Head from "next/head";
import styles from "../styles/Home.module.css";

import products from "../products.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MadOutdoor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map((product) => (
        <div key={product.name} className=a{styles.product}>
          {product.name} {product.price}
        </div>
      ))}
    </div>
  );
}
