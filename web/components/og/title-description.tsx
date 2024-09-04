export function OgImageTitleDescription(props: {
  title: string;
  description: string;
  type?: "pattern" | "guide" | "library";
}) {
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
          flexDirection: "column",
          padding: "0 1rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "-1rem",
        }}
      >
        <p style={{ fontWeight: "medium", fontSize: "4rem" }}>{props.title}</p>
        <p style={{ fontSize: "1.65rem", color: "#a3a3a3" }}>
          {props.description}
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "1.25rem",
          left: "50%",
          transform: "translateX(-42%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1rem",
          color:
            props.type === "pattern"
              ? "#4bafac"
              : props.type === "guide"
                ? "#FF6700"
                : "#DFFF00",
        }}
      >
        <svg
          height="40"
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
        <p
          style={{
            fontSize: "1.25rem",
            color: "#a3a3a3",
          }}
        >
          (beta)
        </p>
      </div>
    </div>
  );
}
