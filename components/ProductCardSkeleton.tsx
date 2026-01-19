export default function ProductCardSkeleton() {
  return (
    <div
      style={{
        background: "#f3f3f3",
        borderRadius: "20px",
        padding: "1rem",
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "220px",
          background: "#e0e0e0",
          borderRadius: "16px",
          marginBottom: "1rem",
        }}
      />

      <div
        style={{
          width: "70%",
          height: "16px",
          background: "#e0e0e0",
          borderRadius: "8px",
          marginBottom: "0.5rem",
        }}
      />

      <div
        style={{
          width: "50%",
          height: "14px",
          background: "#e0e0e0",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
