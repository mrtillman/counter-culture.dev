import React from "react";
import { Provider } from "react-redux";
import HeroHead from "../components/hero-head";
import HeroSection from "../components/hero-section";
import AppShell from "../components/app-shell";
import { wrapper } from "../store/configureStore";

function CounterCultureDev({ Component, pageProps, router }) {
  if (router.route == "/404") {
    return <Component {...pageProps} />;
  }
  if (router.route == "/_error") {
    <HeroSection hideCoverImage={true}>
      <HeroHead title={pageProps.title} navbar={pageProps.navbar} />
      <Component {...pageProps} />
    </HeroSection>;
  }
  return (
    <AppShell {...pageProps}>
      <Component {...pageProps} />
    </AppShell>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default wrapper.withRedux(CounterCultureDev);
