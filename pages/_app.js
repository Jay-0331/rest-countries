import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Progress } from '../components/progress';
import Head from "next/head";
import Header from '../components/Header';
import '../styles/globals.css'

function MyApp({ Component, pageProps}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handelStart = () => {
      setIsAnimating(true)
    }
    const handelStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handelStart)
    router.events.on('routeChangeComplete', handelStop)
    router.events.on('routeChangeError', handelStop)
    
    return () => {
      router.events.off('routeChangeStart', handelStart)
      router.events.off('routeChangeComplete', handelStop)
      router.events.off('routeChangeError', handelStop)
    };
  }, [router])
  
  return(
    <>
      <Head>
        <title>Where In The World?</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Progress isAnimating={isAnimating}/>
      <Header/>
      <main className='flex items-center flex-col mx-4'>
        <Component {...pageProps}/>
      </main>
    </>
  );
}

export default MyApp
