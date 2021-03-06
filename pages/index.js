import Head from 'next/head'
import { useSession } from "next-auth/client";
import Card from "./card/card";
import 'tailwindcss/tailwind.css'
import Home from "./home/home";

export default function Component() {
  const [session, loading] = useSession();
  const user = session?.user;

  return (
    <div>
      <Head>
        <title>Github Card - Rogerbatt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user && (
        <>
          <Card />
        </>
      )}

      {!user && (
        <>
          <Home />
        </>
      )}
    </div>
  )
}
