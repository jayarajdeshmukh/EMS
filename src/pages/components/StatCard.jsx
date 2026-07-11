function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderLeft: `6px solid ${color}`,
        minWidth: "200px"
      }}
    >
      <h4 style={{ margin: 0, color: "#555" }}>{title}</h4>
      <h2 style={{ margin: "10px 0 0 0" }}>{value}</h2>
    </div>
  );
}

export default StatCard;