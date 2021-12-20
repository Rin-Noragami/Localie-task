import styled, { createGlobalStyle } from "styled-components";
import "./index.css";

const Global = createGlobalStyle`
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
}`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;