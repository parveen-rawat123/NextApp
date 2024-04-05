
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
        <h1>innner layout item</h1>
        {children}
   </>
  ); 
}
