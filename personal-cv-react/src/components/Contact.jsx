import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputStyle = {
    padding: "10px 12px",
    border: "1px solid var(--border)",
    borderRadius: "4px",
    background: "var(--surface2)",
    color: "var(--text)",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    width: "100%",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

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
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 18px",
            background: "var(--accent)",
            color: "#0d1117",
            border: "none",
            borderRadius: "4px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}