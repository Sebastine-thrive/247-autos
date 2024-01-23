export const metadata = {
  title: '247 autos',
  description: 'Your best bet for  auto cars and vehicle sale and purchase in Lagos, Awka, owerri, Benin and all over Nigeria.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
