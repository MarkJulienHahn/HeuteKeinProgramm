import { useEffect } from "react";
import Screen01 from "../components/Screen01";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heute kein Programm</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Screen01 />
      </main>
    </div>
  );
}
