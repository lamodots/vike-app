export { Layout };
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}
