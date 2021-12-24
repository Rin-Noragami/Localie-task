import Global from "../style/Global";
//imports global styles for all pages


//sets global styles for pages
//displays the promised pages
function MyApp({ Component, pageProps }) {
  return (
    <>    
      <Global />     
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
