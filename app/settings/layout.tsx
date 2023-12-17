export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>navigation</nav>

      {children}
    </section>
  );
}
