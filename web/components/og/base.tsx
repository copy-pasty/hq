export function OgImageBase() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0 1rem",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "-0.0275em",
        color: "#fff",
        background: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <svg
          height="74"
          viewBox="0 0 49 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 52H3V27.5V3H16.5M16.5 52H30V27.5H46V3L16.5 3M16.5 52V27.5V3"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
        <p style={{ fontSize: "5rem" }}>copy pasty</p>
        <p
          style={{
            fontSize: "2.75rem",
            color: "#a3a3a3",
            paddingBottom: "1rem",
          }}
        >
          (beta)
        </p>
      </div>

      <p style={{ fontSize: "2rem", color: "#a3a3a3", marginTop: "-0.15rem" }}>
        composable libraries, patterns and guides with best-in-class DX
      </p>
    </div>
  );
}
