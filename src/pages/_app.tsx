import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ToastContainer
        theme="colored"
        position="top-center"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <DefaultSeo
        title="Simple Todo"
        description="Simple To-Do is a website where you can store your to-do lists for free!"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/Logo.png",
          },
        ]}
      />
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;
