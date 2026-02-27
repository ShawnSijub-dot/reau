import { useState } from "react";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header style={{
      background: "var(--header-bg)",
      borderBottom: "3px solid var(--accent)",
      padding: "24px 0 16px",
      marginBottom: "24px",
      textAlign: "center",
    }}>
      <h1 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 800,
        fontSize: "2.2rem",
        letterSpacing: "4px",
        textTransform: "uppercase",
        color: "var(--accent)",
        textShadow: "0 0 30px rgba(232,160,32,0.3)",
      }}>
        Personal Online CV
      </h1>
      <button
        onClick={toggleDarkMode}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          background: "var(--accent)",
          color: "#0d1117",
          border: "none",
          borderRadius: "4px",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}