import '../styles/globals.css';
import { Providers } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
  
    <Providers session={pageProps.session}>

    <Component {...pageProps} />
    </Providers>
  );

}
export default MyApp;
 