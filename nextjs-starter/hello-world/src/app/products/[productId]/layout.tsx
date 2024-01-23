export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>Header product</p>
        </header>
        {children}
        <h2>Features products</h2>
        <footer>
          <p>Footer product</p>
        </footer>
      </body>
    </html>
  );
}
