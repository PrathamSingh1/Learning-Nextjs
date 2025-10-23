

export const metadata = {
  title: {
    template: "%s | Learning Nextjs",
    default: "Learning Nextjs",
  },
};

export default function RootLayout({ children }) {
  return (
      <div>
        <h1>Marketing Header</h1>
        {children}
        <h1>Marketing Footer</h1>
      </div>
  );
}
