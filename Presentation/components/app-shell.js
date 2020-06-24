import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "./navbar";
import AppFooter from "./app-footer";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

function AppShell(props) {
  ReactGA.initialize(process.env.GA_TRACKING_CODE, {
    debug: !!process.env.DEV_ENV,
  });
  useEffect(() => {
    ReactPixel.init(process.env.PIXEL_ID);
    ReactPixel.pageView();
  });
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head">
        <Head>
          <title>{props.title}</title>
        </Head>
        <NavBar model={props.navbar} />
      </div>
      {props.children}
      <AppFooter />
    </section>
  );
}

export default AppShell;
