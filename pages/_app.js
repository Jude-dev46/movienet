import { UserProvider } from "@auth0/nextjs-auth0/client";

import "../styles/globals.css";
import "../styles/UpcomingMovie.css";
import "../public/font-awesome-4.7.0/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
