export default function About() {
  return (
    <section style={{
      background: "var(--surface)",
      padding: "24px",
      marginBottom: "20px",
      borderRadius: "4px",
      border: "1px solid var(--border)",
      borderLeft: "4px solid var(--accent)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    }}>
      <img
        src="images/Profile.jpg"
        alt="Profile photo"
        width={200}
        height={220}
        style={{
          border: "3px solid var(--accent)",
          borderRadius: "4px",
          display: "block",
          marginBottom: "12px",
        }}
      />

      <p style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "1.6rem",
        letterSpacing: "1px",
        color: "var(--text)",
        marginBottom: "4px",
      }}>
        Shawn Reau Sijub
      </p>

      <p style={{
        fontSize: "0.85rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: "12px",
      }}>
        IT Student | Web Systems and Technologies
      </p>

      <p style={{ color: "var(--text-muted)", marginBottom: "4px" }}>
        Email:{" "}
        <a href="mailto:reausijub@gmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
          reausijub@gmail.com
        </a>
      </p>
      <p style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
        GitHub:{" "}
        <a href="https://github.com/ShawnSijub-dot" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
          github.com/ShawnSijub-dot
        </a>
      </p>

      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "1.4rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: "12px",
        paddingBottom: "6px",
        borderBottom: "1px solid var(--border)",
      }}>
        About Me
      </h2>
      <p style={{ color: "var(--text-muted)" }}>
        I am an IT student figuring out my path in the world of technology. I take things one step at a time,
        stay curious, and push through challenges with patience and determination.
      </p>
    </section>
  );
}