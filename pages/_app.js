import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import "../styles/UpcomingMovie.css";
import "../public/font-awesome-4.7.0/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
        <Analytics />
      </UserProvider>
    </>
  );
}

export default MyApp;
