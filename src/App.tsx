import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import StartPage from "./pages/StartPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { Helmet } from "react-helmet";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <main className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Nav />
      <StartPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}

export default App;
