
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Learning Nextjs",
    default: "Learning Nextjs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
