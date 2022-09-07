import { getSession } from "next-auth";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";

export default function Home() {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />



      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */} 
      </main>
    </div>
  );
}

{/* Introducing server side rendering */}
export async function getServerSideProps(context) { 
  // Get the user
  const session = await getSession(context);

  return{
    props:{
      session
    }
  }
} 