import { useSession, getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from './components/Header'
import Login from './components/Login'

export default function Home() {
  const { data: session } = useSession()
  if(!session) return <Login />;
  return (
    <div >
      <Head>
        <title>Facebook app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
      session,
    }
  }
} 

