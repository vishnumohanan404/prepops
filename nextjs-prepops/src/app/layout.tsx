import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/app/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrepOps - Master DevOps and Cloud Interviews",
  description:
    "Your comprehensive platform for mastering DevOps and cloud interviews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
