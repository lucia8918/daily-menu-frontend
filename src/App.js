import "./App.css";
import React from "react";
import Footer from "./components/layout/Footer";
import Top from "./components/layout/Top";
import Main from "./components/layout/Main";
import { GlobalLoadingContextProvider } from "./context/GlobalLoadingContext";
import GlobalLoading from "./components/common/GlobalLoading";
import axios from "axios";

// init config
axios.defaults.baseURL = "http://localhost:8080";

function App() {
  return (
    <>
      <GlobalLoadingContextProvider>
        <div className="App">
          {/*TOP 영역*/}
          <Top />

          {/*메인 영역*/}
          <Main />

          {/*Footer 영역*/}
          <Footer />

          <GlobalLoading />
        </div>
      </GlobalLoadingContextProvider>
    </>
  );
}

export default App;
