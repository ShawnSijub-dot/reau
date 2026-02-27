import { useState } from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "Python",
  "Git & GitHub", "MySQL", "Computer Hardware", "Networking Fundamentals",
];

export default function Skills() {
  const [visible, setVisible] = useState(true);

  const cardStyle = {
    background: "var(--surface)",
    padding: "24px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid var(--border)",
    borderLeft: "4px solid var(--accent)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  };

  const h2Style = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: "1.4rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "var(--accent)",
    marginBottom: "12px",
    paddingBottom: "6px",
    borderBottom: "1px solid var(--border)",
  };

  const btnStyle = {
    display: "block",
    margin: "0 auto 10px auto",
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
  };

  return (
    <>
      <button style={btnStyle} onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <section style={cardStyle}>
          <h2 style={h2Style}>Skills</h2>
          <ul style={{ marginLeft: "20px", marginBottom: "10px" }}>
            {skills.map((skill) => (
              <li key={skill} style={{ color: "var(--text-muted)", padding: "2px 0" }}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}