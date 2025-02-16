import { Smooch_Sans } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/providers/client-provider";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "MUSIC",
  description: "MUSIC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={smoochSans.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
