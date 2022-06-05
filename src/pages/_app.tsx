import "../styles/globals.css";
import { wrapper } from "src/redux/store";

function App({ Component, ...pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
