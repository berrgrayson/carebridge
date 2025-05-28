export default function PatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative min-h-screen w-full">{children}</div>;
}
