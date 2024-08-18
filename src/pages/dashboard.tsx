import { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Navbar from './_navbar';
import Head from 'next/head';

const Dashboard: NextPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }
    if (!session) {
        router.push('/login');
        return null;
    }

    return (
        <>
          <Head>
            <title>Dashboard</title>
            <meta name="description" content="A page to manage and view templates" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className="flex flex-col items-center justify-center min-h-screen text-slate-950 bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg">This is the Dashboard page.</p>
          </main>
        </>
      );
};

export default Dashboard;
