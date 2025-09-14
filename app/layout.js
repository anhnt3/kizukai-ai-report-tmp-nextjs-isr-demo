export const metadata = {
  title: 'ISR Sample',
  description: 'Minimal ISR example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
        {children}
      </body>
    </html>
  );
}


