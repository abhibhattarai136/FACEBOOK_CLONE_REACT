import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";


function MyApp({ Components, pageProps }) {
  return (
  
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );

}
export default MyApp;



//problem