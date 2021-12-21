import Global from "../style/Global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;