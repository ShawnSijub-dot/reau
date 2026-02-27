import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <About />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      <footer style={{
        textAlign: "center",
        marginTop: "20px",
        paddingTop: "16px",
        borderTop: "1px solid var(--border)",
      }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "1px", color: "var(--text-muted)" }}>
          &copy; 2026 Shawn Reau Sijub. All rights reserved.
        </p>
      </footer>
    </>
  );
}