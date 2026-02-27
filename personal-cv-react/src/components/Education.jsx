const education = [
  { level: "Bachelor of Science in Information Technology", institution: "College of Information Technology and Computing, USTP – CDO Campus", year: "2028" },
  { level: "Senior High School", institution: "Liceo de Cagayan University", year: "2022" },
  { level: "Junior High School", institution: "Saint Agustine Institute of Technology", year: "2020" },
  { level: "Elementary", institution: "Blessed Juana Condessa School (BJCS)", year: "2016" },
  { level: "Kindergarten", institution: "Blessed Juana Condessa School (BJCS)", year: "2010" },
];

export default function Education() {
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
        Education
      </h2>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr>
            {["Level", "Institution", "Year Graduate"].map((h) => (
              <th key={h} style={{
                border: "1px solid var(--border)",
                padding: "10px 12px",
                background: "var(--surface2)",
                color: "var(--accent)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                textAlign: "left",
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {education.map((row, i) => (
            <tr key={i}>
              <td style={{ border: "1px solid var(--border)", padding: "10px 12px", fontSize: "0.9rem", color: "var(--text-muted)" }}>{row.level}</td>
              <td style={{ border: "1px solid var(--border)", padding: "10px 12px", fontSize: "0.9rem", color: "var(--text-muted)" }}>{row.institution}</td>
              <td style={{ border: "1px solid var(--border)", padding: "10px 12px", fontSize: "0.9rem", color: "var(--text-muted)" }}>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}