export const metadata = {
  title: "Upload CNC",
  description: "Upload grafică pentru tăiere laser CNC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head />
      <body>{children}</body>
    </html>
  );
}
