import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthUserProvider } from "../context/AuthUserContext";
import Layout from "./components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthUserProvider>
  );
}

export default MyApp;
