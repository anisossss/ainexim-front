import "../styles/globals.css";
import { NextUIProvider, Loading } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SSRProvider } from "@react-aria/ssr";
import React from "react";
import App from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ".././styles/tailwind.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";

import { RouteGuard } from "../core/authGuard";

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    let comment = document.createComment(`
`);
    document.insertBefore(comment, document.documentElement);
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { loading } = this.state;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <NextThemesProvider defaultTheme="system" attribute="class">
        <NextUIProvider>
          <SSRProvider>
            <Layout>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <RouteGuard>
                    <Component {...pageProps} />
                  </RouteGuard>
                </PersistGate>
              </Provider>
            </Layout>
          </SSRProvider>
        </NextUIProvider>
      </NextThemesProvider>
    );
  }
}
