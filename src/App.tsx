import "./App.css";
import StartPage from "./pages/StartPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <main className="App">
      <StartPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}

export default App;
