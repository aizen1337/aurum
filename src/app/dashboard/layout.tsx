import Header from "~/components/Header";

export const metadata = {
  title: "Dashboard",
  description: "Organize your team",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <>
  <Header/>
  {children}
  </>
  )
}
